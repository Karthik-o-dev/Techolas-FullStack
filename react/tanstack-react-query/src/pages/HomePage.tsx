import { useNavigate } from "react-router";
import { useUsersMutation, useUsersQuery } from "../hooks/reactQuery";

export const HomePage = () => {


    const navigate = useNavigate();
    const { data, isLoading, isError } = useUsersQuery();

    const { mutate } = useUsersMutation();

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
        </div>
        <div className="grid grid-cols-3 gap-3 m-2">

            {data?.users.map(user => {
                return <div onClick={() => navigate(`/user/${user.id}`)} key={user.id} className="border p-2 text-center rounded-md">{user.firstName} {user.lastName} {user.age}</div>
            })}
        </div>
    </div>
}