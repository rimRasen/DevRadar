import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error('MONGODB_URI is not defined');
}
const client = new MongoClient(uri);

export async function connectDB() { 
    try { 
        await client.connect();
        return client.db('devradar');
    } catch (error) { 
        console.error('Database connection failed', error);
        throw error;
    }
}