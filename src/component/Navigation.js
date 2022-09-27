import { NavLink } from "react-router-dom";

// import styles
import styles from "../assets/styles/Navigation.module.css";

function Navigation() {
  return (
    <>
      <nav className={`navbar navbar-expand-sm ${styles.navigation}`}>
        <div className={`${styles.menu}`}>
          <ul className="navbar-nav text-center">
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
