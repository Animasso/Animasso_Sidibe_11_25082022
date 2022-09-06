import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar(props) {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="ulNavbar">
        <li className="liNavbar">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Accueil
          </NavLink>
        </li>
        <li className="liNavbar">
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
