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
import { useState } from "react"
export const ChildComponent = () => {

    const [theme, setTheme] = useState<"dark" | "light">("light");
    const [count, setCount] = useState<number>(0);
    const [className, setClassName] = useState<string>("font-mono text-black bg-white flex flex-col justify-center items-center h-screen gap-3")

    // if (theme === "light") {
    //     return <div>light mode</div>
    // }

    return <div className={className}>
        <div>
            {theme === "dark" && "Dark mode"}
            {theme === "light" && "Light mode"}
            <br />

            {theme === "dark" ? "dark" : "light"}
        </div>



        <button className="bg-red-600 text-white rounded-full p-2 px-5"
            onClick={() => {
                if (theme === "dark") {
                    setTheme("light")
                    setClassName(className.replace("bg-black text-white", "bg-white text-black"))
                } else {
                    setTheme("dark")
                    setClassName(className.replace("bg-white text-black", "bg-black text-white"))
                } setCount(count + 1)
            }}>Toggle</button>

        <p>{count} times clicked</p>
    </div>
}