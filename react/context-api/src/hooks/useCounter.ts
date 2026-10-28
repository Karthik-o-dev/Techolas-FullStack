import { useContext } from "react"
import { CounterContext, type CounterContextType } from "../providers/CounterProvider";


export const useCounter = () => {
    const response = useContext(CounterContext);
    return response as CounterContextType;
}