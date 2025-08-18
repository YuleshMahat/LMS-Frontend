import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import "../../App.css";
import AdminModuleBar from "./AdminModuleBar";

const DashboardLayout = () => {
  return (
    <div className="dashboardLayout">
      <AdminModuleBar />
      <div className="mainArea">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
