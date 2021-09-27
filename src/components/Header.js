import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h2>Workbook</h2>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="./register" activeClassName={classes.active}>Register</NavLink>
          </li>
          <li>
            <NavLink to="./aboutus" activeClassName={classes.active}>About Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
