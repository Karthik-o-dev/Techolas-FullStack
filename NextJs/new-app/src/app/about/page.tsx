import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "about",
    description: "Learn more about us"
}

export default function About() {
    return <div><Image src={"/vercel.svg"} alt="image" width={500} height={300} /></div>
}