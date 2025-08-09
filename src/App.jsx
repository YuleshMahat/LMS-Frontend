import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="*" element={<DefaultLayout />}>
            <Route path="" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
