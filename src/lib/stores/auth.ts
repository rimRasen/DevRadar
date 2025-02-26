import { writable } from 'svelte/store';

export interface User { 
    id: string;
    username: string;
    email: string;
    avatar: string;
    githubId: string;
}

function createAuthStore() {
    const { subscribe, set, update} = writable<{
        user: User | null;
        loading: boolean;
        error: string | null;
    }>({
        user: null,
        loading: true,
        error: null
    });
    
    return { 
        subscribe, 
        login: async (code: string) => {
            try { 
                const response = await fetch('/api/auth/github', {
                    method: 'POST',
                    body: JSON.stringify({ code }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                update(state => ({ ...state, user: data, loading: false }));
            } catch (error) { 
                update(state => ({ ...state, error: 'Login failed', loading: false }));
            }
        },
        logout: async () => {
            set({ user: null, loading: false, error: null });
        }
    };
}

export const auth = createAuthStore();