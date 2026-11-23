"use client"

import { useRouter } from "next/navigation";

type UserType = {
    user: {
        name: string;
        id: number
    }
}

export const SingleUser = ({ user }: UserType) => {

    const router = useRouter();

    return <div onClick={() => router.push(`/users/${user.id}`)} className="border rounded-md p-2 px-3 hover:bg-gray-300 active:bg-red-300">{user.name}</div>
}
