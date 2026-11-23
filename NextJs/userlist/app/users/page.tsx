export default async function Users() {
    "use cache"
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data)

    return <div>
        <h1>Users List</h1>
        {data && data.map((user: any) => {
            return <div key={user.id}>{user.name}</div>
        })}
    </div>
}