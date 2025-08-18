import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../services/storageFunctions.js";
const Auth = ({ children }) => {
  const location = useLocation();
  const token = getToken("access");
  let user = {};
  if (token) {
    console.log("token exists getting userData from store");
    const { userData } = useSelector((store) => store.userStore);
    user = userData;
    console.log("userdata on auth", userData);
    if (userData?._id)
      console.log("User data exist in store check from auth componnet");
    else console.log("user data does not exist in store check from auth");
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
