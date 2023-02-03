export interface TodoItem {
    id: number | string;
    title: string;
    completed: boolean;
}

export interface Prompt {
    userId?: number;
    title: string;
    id: number;
    completed?: boolean;
}