import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/axios";
import type { User, Users } from "../types/users";



export const useUsersQuery = () => useQuery({
    queryKey: ["users"],
    queryFn: async () => {
        const res = await api.get<Users>("/users");
        return res.data
    },
    refetchOnWindowFocus: false,
    enabled: true,
    retry: 3,
    staleTime: 1000 * 60

})

export const useUserQuery = (id: number) => useQuery({
    queryKey: ["users", id],
    queryFn: async () => {
        const res = await api.get<User>(`/users/${id}`);
        return res.data
    },
    refetchOnWindowFocus: false,
    enabled: Boolean(id),
    retry: 3,
    staleTime: 1000 * 60
})

export const useUsersMutation = () => useMutation({

    mutationFn: async () => {
        const response = await api.post("/users/add", {
            firstName: 'Muhammad',
            lastName: 'Ovi',
            age: 250,
            /* other user data */
        });
        return response.data;
    },
    onSuccess: () => {
        const queryClient = useQueryClient();
        queryClient.invalidateQueries({
            queryKey: ["users"]
        })
    }
})