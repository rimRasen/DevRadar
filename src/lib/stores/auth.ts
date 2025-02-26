import { writable } from 'svelte/store';

export interface User { 
    id: string;
    username: string;
    email: string;
    avatar: string;
    githubId: string;
}

function createAuthStore() {
    const { subscribe, set, update} = write<{
        
    }>
}