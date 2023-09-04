import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/css.png";

import { FaBars, FaTimes } from "react-icons/fa";
import { navMenu } from "../../constant/constant";
export const ResponsiveNavbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav className="nav">
      <div className="container nav_container">
        <Link to="/" className="logo" onClick={()=>setIsNavShowing(false)}>
          <img src={logo} alt="logo" />
        </Link>

        <ul className={`nav_links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
          {navMenu.map(({ id, name, path }) => {
            return (
              <li key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}  onClick={() => setIsNavShowing(prev => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* this is toggle button  */}
        <button
          className="nav_toggle_btn md:hidden"
          onClick={() => setIsNavShowing(prev => !prev)}
        >
          {isNavShowing ? <FaTimes size={30}/> : <FaBars  size={30}/>}
        </button>
      </div>
    </nav>
  );
};