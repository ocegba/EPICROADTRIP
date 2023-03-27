import React from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router";

const AuthRoute = props => {
  const { isAuthUser, type, children } = props;
  if (type === "guest" && isAuthUser) return <Navigate to="/profil" />;
  else if (type === "private" && !isAuthUser) return <Navigate to="/" />;

  return children
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);