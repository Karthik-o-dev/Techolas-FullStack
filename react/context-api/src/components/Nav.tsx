import { Link } from "react-router"

export const Nav = () => {
    return <div className="flex justify-center items-center gap-10 h-20 w-screen">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}