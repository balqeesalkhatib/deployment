import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbarClass navbar navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link navLinkClass" to="/counter">
              Counter
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link navLinkClass" to="/stats">
              Stats
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link navLinkClass" to="/history">
              History
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;