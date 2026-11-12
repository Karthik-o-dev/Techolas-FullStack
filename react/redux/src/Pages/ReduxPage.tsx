import { useAppDispatch, useAppSelector } from "../hooks/useRedux"
import { decrement, increment } from "../Redux/slice/CounterSlice";

export const ReduxPage = () => {

    const dispatch = useAppDispatch();

    const { value } = useAppSelector((state) => state.counter);

    return <div className="flex justify-center p-6 items-center flex-col gap-5 ">
        <h1 className="text-3xl font-bold underline uppercase ">Redux - State Management</h1>

        <div className="font-mono text-3xl">value: {value}</div>

        <div className="flex gap-3">
            <button className="bg-green-500 p-2 px-4 rounded-md cursor-pointer" onClick={() => { dispatch(increment({ value: 1 })) }}>+</button>
            <button className="bg-red-500 p-2 px-4 rounded-md cursor-pointer" onClick={() => { dispatch(decrement({ value: 1 })) }}>-</button>
        </div>
    </div>
}