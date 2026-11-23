import { Suspense } from "react";

export default function UserDetails({ params }: { params: Promise<{ id: string }> }) {
    return <Suspense fallback={<div>.... Loading user details</div>}><UserDetailsContents params={params} /></Suspense>
}

async function UserDetailsContents({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();

    return <div className="flex items-center justify-center">
        <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-5 underline">User Details</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    </div>

}