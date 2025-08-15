import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import Verify from "./pages/Verify.jsx";
import Auth from "./auth/Auth.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "./features/auth/authActions.js";

const App = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((store) => store.userStore);
  const autoLogin = async () => {
    let data = await dispatch(getUserDetails());
  };
  useEffect(() => {
    autoLogin();
  }, [userData?._id]);
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="*" element={<DefaultLayout />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              path="dashboard"
              element={
                <Auth>
                  <Dashboard />
                </Auth>
              }
            />
            <Route path="verify-email" element={<Verify />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
