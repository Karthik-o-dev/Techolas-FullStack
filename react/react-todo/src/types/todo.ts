export type TodoObj = {
    id: () => `${string}-${string}-${string}-${string}-${string}`;
    title: string | undefined;
    is_completed: boolean;
    created_at: string;
    updated_at: string;
}