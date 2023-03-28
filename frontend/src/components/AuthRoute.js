import React from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router";

const AuthRoute = (props) => {
  const { isAuthUser, type, children, user } = props;

  if (type === "guest" && isAuthUser && user.IdRole ==="user") return <Navigate to="/profil" />;
  else if (type === "guest" && isAuthUser && user.IdRole ==="admin") return <Navigate to="/admin" />;
  else if (type === "private" && !isAuthUser) return <Navigate to="/" />;

  return children
};

const mapStateToProps = ({ isAuthUser, user }) => ({
  isAuthUser, user
});

export default connect(mapStateToProps)(AuthRoute);