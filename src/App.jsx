import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout.jsx";
import DashboardLayout from "./components/layout/DashboardLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import Verify from "./pages/Verify.jsx";
import Auth from "./auth/Auth.jsx";
import { useDispatch } from "react-redux";
import { getUserDetails } from "./features/auth/authActions.js";
import AddBook from "./pages/AddBook.jsx";
import { Books } from "./pages/Books.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const dispatch = useDispatch();
  const autoLogin = async () => {
    let data = await dispatch(getUserDetails());
  };

  useEffect(() => {
    console.log("APP");
    autoLogin();
  }, []);
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="*" element={<DefaultLayout />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="verify-email" element={<Verify />} />
          </Route>
          <Route path="*" element={<DashboardLayout />}>
            <Route
              path="dashboard"
              element={
                <Auth>
                  <Dashboard />
                </Auth>
              }
            />
            <Route
              path="addBook"
              element={
                <Auth>
                  <AddBook />
                </Auth>
              }
            />
            <Route
              path="books"
              element={
                <Auth>
                  <Books />
                </Auth>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
