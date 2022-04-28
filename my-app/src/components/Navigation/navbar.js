import React from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
