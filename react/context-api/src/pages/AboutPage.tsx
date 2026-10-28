import { Nav } from "../components/Nav";
import { useCounter } from "../hooks/useCounter";

export const AboutPage = () => {

    const { counter, setCounter } = useCounter();
    return <div className="min-h-screen">
        <Nav />
        <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
            <h1>AboutPage</h1>
            <p>State (Counter): <code>{counter}</code></p>
            <p className="text-red-600 text-sm">(Same state (counter) between pages)</p>
            <button className="p-2 px-4 rounded-sm bg-emerald-800 text-white min-w-50 mt-6 cursor-pointer" onClick={() => setCounter(counter + 1)} >Click</button>
        </div>
    </div>
}