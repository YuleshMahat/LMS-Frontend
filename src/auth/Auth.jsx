import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Auth = ({ children }) => {
  const { userData } = useSelector((store) => store.userStore);
  const location = useLocation();

  return (
    <>
      {userData && userData._id ? (
        children
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </>
  );
};

export default Auth;
