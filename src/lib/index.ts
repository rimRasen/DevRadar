// place files you want to import through the `$lib` alias in this folder.
export interface Job { 
    id: string;
    title: string;
    company: string;
    location: string;
    tyoe: string;
    description: string;
    requirements: string;
    postedDate: Date;
    category: string;
}

export interface Event { 
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
    type: 'conference' | 'hackathon' | 'meetup';
    organizer: string;
}