import { useContext } from "react"
import { CounterContext, type CounterContextType } from "../App"
import { Nav } from "../components/nav";

export const HomePage = () => {
    const { counter } = useContext(CounterContext) as CounterContextType;

    return <div>
        <Nav />
        Homepage -{counter}</div>
}