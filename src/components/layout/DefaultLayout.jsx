import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";

const DefaultLayout = () => {
  return (
    <div className="pageLayout">
      <Nav />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
