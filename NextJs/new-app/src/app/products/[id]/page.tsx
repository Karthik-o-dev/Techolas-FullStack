"use client"
import { useParams } from "next/navigation";
import { Suspense } from "react";



function Productid() {

    const { id } = useParams();
    return <div>Single Product- {id} </div>
}

export default function Single() {
    return <Suspense fallback={<div>Loading</div>}>
        <Productid />
    </Suspense>
}