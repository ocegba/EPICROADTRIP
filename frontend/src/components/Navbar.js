import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../services/auth";

import logo from "../media/logo.png";
import Avatar from "@mui/material/Avatar";

import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = ({logout, isAuthUser, isAdmin}) => {

  const handleLogout = () => {
    try {
      logout()
      window.location.href="/login"
    } catch (error) {
      console.log(error)
    }

  }
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
            {isAuthUser ? (
              <>
                <li>
                  {isAdmin ? (
                    <Link to="/admin">
                      <Avatar src="/static/images/avatar/1.jpg" />
                    </Link>
                  ) : (
                    <Link to="/profil">
                      <Avatar src="/static/images/avatar/1.jpg" />
                    </Link>
                  )}
                </li>
                <li>
                  <IconButton aria-label="delete" onClick={handleLogout}>
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

const mapStateToProps = (state) => ({
  isAuthUser: state.isAuthUser,
  isAdmin: state.isAdmin,
});

export default connect(mapStateToProps, { logout })(Navbar);
