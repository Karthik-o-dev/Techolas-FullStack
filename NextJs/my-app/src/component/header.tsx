"use client"

import { useRouter } from "next/navigation"

export const Header = () => {

    const router = useRouter();
    return <header>
        <button onClick={() => router.push("/")}>Home</button>
        <button onClick={() => router.push("/about")}>About</button>
        <button onClick={() => router.push("/contact")}>Contact</button>
    </header>
}