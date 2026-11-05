type User = {
    id: number;
    username: string;
    fullName: string;
}

type Comment = {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
}

export type ApiResponse = {
    comments: Comment[];
    limit: number;
    skip: number;
    total: number;
}