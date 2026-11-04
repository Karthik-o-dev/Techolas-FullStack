
import { useEffect, useState } from "react"
import type { Users } from "../type/users";
import { getUsers } from "../services/user";

let mounted = false;

export const AxiosPage = () => {

    const [users, setUsers] = useState<Users["users"]>([]);
    const [query, setQuery] = useState<string>("");

    const fetchUsers = async () => {
        const res = await getUsers(query);
        if (res) {
            setUsers(res.users)
        }
    };

    useEffect(() => {
        // fetchUsers();
        let debounce: number;
        if (!mounted) {
            fetchUsers();
            mounted = true;
        } else {
            debounce = setTimeout(() => {
                fetchUsers();
            }, 2000)
        }
        return () => {
            clearTimeout(debounce);
        }
    }, [query]);

    return <div>
        <div className="flex justify-between items-center p-5 shadow-md">
            <h1 className="text-4xl font-semibold font-mono">Users List</h1>
            <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Query..." className="p-3 border border-gray-300 rounded-md" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 m-5 gap-5">
            {
                users.map((user) => {
                    return <div key={user.id} className="bg-white relative text-center shadow shadow-black/30 p-3 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl duration-500 transition-all">
                        <span className="absolute top-1 right-1 bg-red-600 text-white p-1 px-2 rounded">{user.bloodGroup}</span>
                        <span className="absolute top-1 left-1 bg-emerald-800 text-white p-1 px-2 text-sm rounded">{user.role}</span>
                        <div className="flex justify-center">
                            <img src={user.image} alt={user.firstName} className="w-20 h-20 rounded-full object-cover" />
                        </div>
                        <div className="mt-2">
                            <h1>{user.firstName} {user.lastName}</h1>
                            <p>{user.email}</p>
                            <p>Age: {user.age}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}