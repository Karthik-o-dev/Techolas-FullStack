import { Nav } from "../components/Nav";
import { useCounter } from "../hooks/useCounter";


export const HomePage = () => {
    const { counter } = useCounter();

    return <div className="h-screen">
        <Nav />
        <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
            <h1>HomePage</h1>
            <p>State (Counter): <code>{counter}</code></p>
            <p className="text-red-600 text-sm">(Same state (counter) between pages)</p>
        </div>
    </div>
}