"use client"
import { useCounterStore } from "@/store/zustand";

export default function ZustandCounter() {
    const { count, increment, decrement } = useCounterStore();

    return <div>
        <h1>Zustand context counter</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment} className="bg-green-400 p-3 px-4 rounded-md">Increment</button>
        <button onClick={decrement} className="bg-red-400 p-3 px-4 rounded-md">decrement</button>
    </div>
}