// src/components/PrivateRoute/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
// import Body from "../Body/Body";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/home" />  : <Navigate to="/login" />;
};

export default PrivateRoute;
