import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

const DefaultLayout = () => {
  return (
    <div className="pageLayout">
      <Nav />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
