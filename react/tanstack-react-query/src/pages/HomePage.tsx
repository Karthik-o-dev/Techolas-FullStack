import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "../lib/axios"
import type { Users } from "../types/users";

export const HomePage = () => {

    const queryClient = useQueryClient();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await api.get<Users>("/users");
            return res.data
        },
        refetchOnWindowFocus: false,
        enabled: true,
        retry: 3
    })

    const { mutate } = useMutation({
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

            queryClient.invalidateQueries({
                queryKey: ["users"]
            })
        }
    })

    if (isLoading) {
        return <div className="text-4xl flex justify-center items-center h-screen">....Loading</div>
    }

    if (isError) {
        return <div className="text-4xl flex justify-center items-center h-screen">...Error found</div>
    }

    return <div>
        <div className="text-center my-5">
            <h1 className="text-4xl font-bold">TanStack React Query</h1>
        </div>
        <div className="text-center">
            <button onClick={() => mutate()} className="bg-blue-300 p-2 px-4 rounded-md my-5 font-bold">Add User</button>
            {data?.users.map(user => {
                return <div key={user.id}>{user.firstName} {user.lastName} {user.age}</div>
            })}
        </div>
    </div>
}