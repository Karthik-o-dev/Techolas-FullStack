"use client"

import { useRouter } from "next/navigation"

export const Header = () => {
    const router = useRouter();

    return <header className="flex justify-center items-center gap-3 p-5 border-b mb-2">
        <button onClick={() => router.push("/")}>Home</button>
        <button onClick={() => router.push("/users")}>Users</button>
    </header>
}