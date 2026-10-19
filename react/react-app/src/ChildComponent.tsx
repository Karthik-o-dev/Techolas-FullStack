// interface Props {
//     p1: string;
//     p2: string;
//     children: React.ReactNode;
//     data: string;
// }

import { useReducer } from "react"







// export const ChildComponet = ({ p1, p2, children, data }: Props) => {

//     const handleButton = function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
//         console.log("clicked", e)
//     }

//     return <div>
//         Child Component - {p1}, {p2}
//         <br />
//         Readering in child component - {children}
//         <br />
//         data: {data}

//         <div>
//             <button onClick={handleButton}>Click me!</button>
//         </div>
//     </div>
// }

// import { useState } from "react";

// export const ChildComponent = () => {

//     const [darkMode, setDarkMode] = useState(false);

//     const handleMode = () => {
//         setDarkMode(!darkMode);
//     }

//     return <div>

//         <p>bulb</p>
//         <button onClick={handleMode}>Click to change mode</button>
//     </div >
// }


// map

// import { useState } from "react"

// export const ChildComponent = () => {

//     const [data, setData] = useState<number>(0);
//     const [numbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//     const handleButton = () => {
//         setData(data + 1)
//     }

//     // const mapFunction = numbers.map((number) => {
//     //     return <div>{number}</div>
//     // })

//     return <div>
//         {
//         numbers.map((number) => {
//             return <div>{number}</div>
//         })
//         }
//         <br />

//         <div>{data}</div>
//         <button onClick={handleButton}>Update</button>
//     </div>
// }

// conditional rendering
// import { useState } from "react"
// export const ChildComponent = () => {

//     const [theme, setTheme] = useState<"dark" | "light">("light");
//     const [count, setCount] = useState<number>(0);
//     const [className, setClassName] = useState<string>("font-mono text-black bg-white flex flex-col justify-center items-center h-screen gap-3")

//     // if (theme === "light") {
//     //     return <div>light mode</div>
//     // }

//     return <div className={className}>
//         <div>
//             {theme === "dark" && "Dark mode"}
//             {theme === "light" && "Light mode"}
//             <br />

//             {theme === "dark" ? "dark" : "light"}
//         </div>



//         <button className="bg-red-600 text-white rounded-full p-2 px-5"
//             onClick={() => {
//                 if (theme === "dark") {
//                     setTheme("light")
//                     setClassName(className.replace("bg-black text-white", "bg-white text-black"))
//                 } else {
//                     setTheme("dark")
//                     setClassName(className.replace("bg-white text-black", "bg-black text-white"))
//                 } setCount(count + 1)
//             }}>Toggle</button>

//         <p>{count} times clicked</p>
//     </div>
// }

// useREDUCER

type Action = {
    type: "INCREMENT-1" | "DECREMENT-1" | "RESET-1" | "INCREMENT-2" | "DECREMENT-2" | "RESET-2";
}
type Counters = {
    c1: number;
    c2: number;
}

const reducer = (state: Counters, action: Action): Counters => {
    if (action.type === "RESET-1") {
        return { ...state, c1: 0 };
    }
    if (action.type === "RESET-2") {
        return { ...state, c2: 0 };
    }
    if (action.type === "INCREMENT-1") {
        return { ...state, c1: state.c1 + 1 };
    }
    if (action.type === "INCREMENT-2") {
        return { ...state, c2: state.c2 + 1 };
    }
    if (action.type === "DECREMENT-1") {
        return { ...state, c1: state.c1 - 1 };
    }
    if (action.type === "DECREMENT-2") {
        return { ...state, c2: state.c2 - 1 };
    }
    return state;
}

const handleDarkMode = (_state: string, action: string): string => {
    return action;
    // return action === "dark" ? "light" : "dark";
}

export const ChildComponent = () => {

    const [state, dispatch] = useReducer<Counters, [action: Action]>(reducer, { c1: 0, c2: 0 });
    const [darkMode, dispatchDarkMode] = useReducer(handleDarkMode, "light");

    return <div className={`flex justify-center items-center h-screen flex-col bg-${darkMode == "light" ? "white" : "black"} text-${darkMode == "light" ? "black" : "white "}`}>
        <button className="text-4xl mb-4" onClick={() => dispatchDarkMode(darkMode === "dark" ? "light" : "dark")}>{darkMode}</button>
        <p className="text-6xl border border-gray-300 px-5 p-3 rounded-md">Value of c1 : {state.c1}</p>
        <p className="text-6xl border border-gray-300 px-5 p-3 rounded-md">Value of c2 : {state.c2}</p>
        <div className="flex gap-2 mt-5">
            <button className="bg-amber-300 p-2 px-5 rounded-md" onClick={() => dispatch({ type: "INCREMENT-1" })}>Increment-1</button>
            <button className="bg-green-400 p-2 px-5 rounded-md" onClick={() => dispatch({ type: "DECREMENT-1" })}>Decrement-1</button>
            <button className="bg-blue-400 p-2 px-5 rounded-md" onClick={() => dispatch({ type: "RESET-1" })}>Reset-1</button>
        </div>
        <div className="flex gap-2 mt-5">
            <button className="bg-amber-300 p-2 px-5 rounded-md" onClick={() => dispatch({ type: "INCREMENT-2" })}>Increment-2</button>
            <button className="bg-green-400 p-2 px-5 rounded-md" onClick={() => dispatch({ type: "DECREMENT-2" })}>Decrement-2</button>
            <button className="bg-blue-400 p-2 px-5 rounded-md" onClick={() => dispatch({ type: "RESET-2" })}>Reset-2</button>
        </div>

    </div >
}