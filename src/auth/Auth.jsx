import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../services/storageFunctions.js";
const Auth = ({ children }) => {
  const location = useLocation();
  const token = getToken("access");
  const { userData } = useSelector((store) => store.userStore);

  if (!token || !userData?._id) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default Auth;
