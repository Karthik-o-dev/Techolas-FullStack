'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export const Form = () => {

    const [search, setSearch] = useState("");
    const router = useRouter()

    return <div>
        <form onSubmit={(e) => { e.preventDefault(); router.push("/?city=" + search) }} className="flex gap-2 w-full max-w-md mb-8">
            <input onChange={e => setSearch(e.target.value)} type="text" name="city" placeholder="Search city..." className="flex-1 min-w-0 px-5 py-3 rounded-xl bg-white/50 outline-none focus:ring-2 focus:ring-blue-300 shadow-lg" />

            <button type="submit" className="bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition shadow-lg">Search</button>
        </form>
    </div>
}