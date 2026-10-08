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

export const ChildComponent = () => {

    const handleMode = () => {

    }

    return <div>

        <p>bulb</p>
        <button onClick={handleMode}>Click to change mode</button>
    </div>
}