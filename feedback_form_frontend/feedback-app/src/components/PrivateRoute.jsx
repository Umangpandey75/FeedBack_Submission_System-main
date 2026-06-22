import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("admin") === "true";
  return isAdmin ? children : <Navigate to="/admin" replace />;
};

export default PrivateRoute;
