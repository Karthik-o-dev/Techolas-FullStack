import { SingleUser } from "@/component/SingleUser";

export default async function Users() {
    "use cache"
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data)

    return <div>
        <h1 className="flex justify-center text-3xl">Users List</h1>
        <div className="grid grid-cols-3 gap-2">
            {data && data.map((user: any) => (<SingleUser key={user.id} user={user} />))}
        </div>

    </div>
}