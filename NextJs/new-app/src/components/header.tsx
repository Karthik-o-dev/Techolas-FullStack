"use client"

import Link from "next/link"
import { useRouter } from "next/navigation";

export const Header = () => {

    const router = useRouter();
    return <header className="flex justify-center p-10">
        <nav className="flex gap-10">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <button onClick={() => router.push("/contact")}>Contact</button>
            <button onClick={() => router.push("/products")}>Products</button>
        </nav>
    </header>
}