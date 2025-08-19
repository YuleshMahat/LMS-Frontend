import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../services/storageFunctions.js";
const Auth = ({ children }) => {
  const location = useLocation();
  const token = getToken("access");
  let user = {};
  if (token) {
    const { userData } = useSelector((store) => store.userStore);
    user = userData;
  }

  return (
    <>
      {user && user._id ? (
        children
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </>
  );
};

export default Auth;
