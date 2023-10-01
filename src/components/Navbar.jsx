import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/muscle.png";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="navbar__container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="navbar__links">
        <Link to="/" className="navbar__link-home">
          Home
        </Link>
        {isHomePage ? (
          <a href="#exercises" className="navbar__link-exercises">
            Exercises
          </a>
        ) : (
          <a href="#similarExercises" className="navbar__link-exercises">
            Similar Exercises
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
