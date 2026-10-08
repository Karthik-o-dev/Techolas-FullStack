// interface Props {
//     p1: string;
//     p2: string;
//     children: React.ReactNode;
//     data: string;
// }



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

import { useState } from "react";

export const ChildComponent = () => {

    const [darkMode, setDarkMode] = useState(false);

    const handleMode = () => {
        setDarkMode(!darkMode);
    }

    return <div className={`h-screen flex flex-col items-center justify-center
    ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>

        <p>bulb</p>
        <button onClick={handleMode}>Click to change mode</button>
    </div >
}