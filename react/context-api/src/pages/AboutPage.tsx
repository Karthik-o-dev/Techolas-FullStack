import { useContext } from "react"
import { CounterContext, type CounterContextType } from "../App"
import { Nav } from "../components/nav";

export const AboutPage = () => {

    const { counter, setCounter } = useContext(CounterContext) as CounterContextType;
    return <div>
        <Nav />
        <p>counter - {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
}