"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react";


export default function ProductList() {
    const route = useRouter();


    return <div>
        <h1>Product List</h1>
        <h2 onClick={() => route.push(`/products/1`)}>1</h2>
        <h2 onClick={() => route.push(`/products/2`)}>2</h2>
    </div>
}