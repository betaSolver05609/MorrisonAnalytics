import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper grey darken-4">
          <Link to="/" class="brand-logo">
            <i class="material-icons left">desktop_mac</i>
            Morrison Analytics
          </Link>
          <ul class="right hide-on-med-and-down">
            <li>
              <Link to="/Visualization">
                <i class="material-icons left">fingerprint</i>Visualization
              </Link>
            </li>
            <li>
              <Link to="/Analytics">
                <i class="material-icons left">view_module</i>Analytics
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
