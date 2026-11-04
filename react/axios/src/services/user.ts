import { api } from "../lib/axios";
import type { Users } from "../type/users";

export const getUsers = async (query: string) => {
    try {
        const response = await api.get<Users>(`/users/search`, {
            params: {
                q: query
            }
        });
        return response.data
    } catch (error) {
        return null;
    }
}