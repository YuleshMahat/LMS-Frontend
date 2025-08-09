import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";

const DefaultLayout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Nav />
      <main
        className="main"
        style={{ flexGrow: 1, flexDirection: "column", display: "flex" }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
