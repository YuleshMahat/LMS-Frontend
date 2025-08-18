import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";

const DefaultLayout = () => {
  return (
    <div className="pageLayout">
      <Nav />
      <main
        style={{
          flexGrow: 1,
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
