import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import "../../App.css";
import AdminModuleBar from "./AdminModuleBar";
import Footer from "./Footer";

const DashboardLayout = () => {
  return (
    <div className="dashboardLayout">
      <AdminModuleBar />
      <div className="mainArea">
        <Nav />
        <div className="flex-grow-1">
          <Outlet style={{ flexGrow: 1 }} />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
