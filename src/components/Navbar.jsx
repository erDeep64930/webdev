import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="text-3xl bg-gradient-to-r from-pink-300 via-red-100 to-pink-300 text-blue-400 px-10 py-4 mx-auto">
            <ul className="flex  items-center space-x-5">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/project">Project</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar