import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Budget App</NavLink>
      <NavLink to="/transactions/new">New Transaction</NavLink>
    </nav>
  );
};

export default NavBar;
