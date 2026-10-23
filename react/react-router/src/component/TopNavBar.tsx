import { TypedLink } from "./Link"

export const TopNavBar = () => {
    return <header className="p-5 border border-b-1">
        <ul className="flex justify-center item-center gap-5">
            <li><TypedLink to="/">Home</TypedLink></li>
            <li><TypedLink to="/about">About</TypedLink></li>
            <li><TypedLink to="/contact">Contact</TypedLink></li>
        </ul>
    </header>
}