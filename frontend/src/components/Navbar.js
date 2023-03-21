import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../services/auth";

import Button from '@mui/material/Button';

class Navbar extends Component {
  render() {
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
                <Link name="Itinéraires" to="/itineraires">
                  Itinéraires
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {this.props.isAuthUser ? (
              <>
                <Link to="/profil">
                  <img src="profil.png" alt="Profil" />
                </Link>
                <Button color="inherit" onClick={this.props.logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(({ isAuthUser }) => ({ isAuthUser }), { logout })(
  Navbar
);
