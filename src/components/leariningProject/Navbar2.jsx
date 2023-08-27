import { Link } from "react-router-dom"
import { FaConnectdevelop, FaHandshake, FaHome, FaNetworkWired, FaPeopleArrows, FaShopify } from "react-icons/fa"
const navList = [
    {
        id: 1,
        title: "Home",
        link: "/",
        icon: <FaHome />
    },
    {
        id: 2,
        title: "About",
        link: "/about",
        icon: <FaHandshake />
    },
    {
        id: 3,
        title: "Shop",
        link: "/shop",
        icon: <FaShopify />
    },
    {
        id: 4,
        title: "Blog",
        link: "/blog",
        icon: <FaNetworkWired />
    },
    {
        id: 5,
        title: "Contact",
        link: "/contact",
        icon: <FaPeopleArrows />
    },
    {
        id: 6,
        title: "Connect",
        link: "/connect",
        icon: <FaConnectdevelop />
    },
]

const Navbar2 = () => {
    return (
        <nav className="border border-red-600 ">
            <ul className="border-2 border-blue-500 flex items-center justify-between px-5 py-2">
                {
                    navList.map(({ id, link, title, icon }) => (
                        <li key={id} className="border-2 border-green-500 border-dotted p-2">
                            <Link to={link} className="">
                                <div className="flex space-x-2 items-center bg-yellow-500 text-3xl focus:bg-pink-500 focus:text-yellow hover:bg-lime-500 active px-2 ">
                                    {icon}{title}
                                </div></Link>


                        </li>
                    ))
                }
            </ul>

        </nav>
    )
}

export default Navbar2