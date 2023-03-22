import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../services/auth";

import logo from "../media/logo.png";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import IconButton from '@mui/material/IconButton';
import LogoutIcon from "@mui/icons-material/Logout";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <h1>Les Oui-Vie</h1>
          <li>
            <Link name="Itinéraires" to="/itineraires">
              Itinéraires
            </Link>
          </li>
        </div>
        <div>
          <ul>
            {this.props.isAuthUser ? (
              <>
                <li>
                  <Link to="/profil">
                    <Avatar src="/static/images/avatar/1.jpg" />
                  </Link>
                </li>
                <li>
                  <IconButton aria-label="delete"  onClick={this.props.logout}>
                    <LogoutIcon />
                  </IconButton>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register">Inscription</Link>
                </li>
                <li>
                  <Link to="/login">Connexion</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(({ isAuthUser }) => ({ isAuthUser }), { logout })(
  Navbar
);
