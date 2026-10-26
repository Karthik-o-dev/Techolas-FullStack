import { TypedLink } from "./Link"

export const TopNavBar = () => {

    const getRandomId = () => {
        const rn = Math.floor(Math.random() * 1000);
        return `/profile/${rn}`
    }

    return <header className="p-5 border border-b">
        <ul className="flex justify-center item-center gap-5">
            <li><TypedLink to="/">Home</TypedLink></li>
            <li><TypedLink to="/about">About</TypedLink></li>
            <li><TypedLink to="/contact">Contact</TypedLink></li>
            <li><TypedLink to={getRandomId()}>Profile</TypedLink></li>
            <li><TypedLink to="/products">Product</TypedLink></li>
        </ul>
    </header>
}