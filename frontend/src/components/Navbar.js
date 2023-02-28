import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <div>
        <div>
          <Link to="/">
            <img src="logo.png" alt="Logo" />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link name="Itinéraires" to="/itineraires">Itinéraires</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/profil">
            <img src="profil.png" alt="Profil" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
