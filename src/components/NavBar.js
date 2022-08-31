import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar(props) {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Accueil
          </NavLink>
        </li>
        <li>
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
