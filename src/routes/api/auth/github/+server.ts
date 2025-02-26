import { connectDB } from '$lib/server/db';
import {error, json} from '@sveltejs/kit';
import type {RequestEvent} from '@sveltejs/kit';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

export async function POST({request}: RequestEvent) {
    const { code } = await request.json();
    try { 
        // Exchange the code for an access token
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', { 
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                client_id: GITHUB_CLIENT_ID,
                client_secret: GITHUB_CLIENT_SECRET,
                code
            })
        });

        if (!tokenResponse.ok) { 
            throw new Error(`Failed to exchange code for token: ${tokenResponse.statusText}`);
        }

        const {access_token} = await tokenResponse.json();

        const userResponse = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (!userResponse.ok) { 
            throw new Error(`Failed to fetch user: ${userResponse.statusText}`);
        }

        const userData = await userResponse.json();

        // Store user in database
        const db = await connectDB();
        const user = await db.collection('users').findOneAndUpdate(
            { githubId: userData.access_token },
            { 
                $set: {
                    username: userData.login,
                    email: userData.email,
                    avatar: userData.avatar_url,
                    updatedAt: new Date(),
                },
            },
            { upsert: true, returnDocument: 'after' }
        );

        return json(user);
    } catch (err) { 
        throw error(500, 'Failed to authenticate with GitHub');
    }
}