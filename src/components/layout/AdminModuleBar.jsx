import React from "react";
import "../../App.css";
import { Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { FaBook } from "react-icons/fa";
import { PiUsers } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
import { PiBooks } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const AdminModuleBar = () => {
  const { userData } = useSelector((state) => state.userStore);
  return (
    <div className="moduleBar">
      <Typography variant="h3">LOGO</Typography>
      <Typography>Welcome {userData.fName}</Typography>
      <Divider sx={{ border: "solid white 2px", width: "100%", my: 1 }} />
      <ul className="moduleOptions">
        <li>
          <MdSpaceDashboard />
          Dashboard
        </li>
        <li>
          <FaBook />
          <Link
            component={RouterLink}
            to="/books"
            underline="none"
            color="white"
          >
            Books
          </Link>
        </li>
        <li>
          <PiUsers />
          Users
        </li>
        <li>
          <RiAdminFill />
          Admins
        </li>
        <li>
          <PiBooks />
          Borrows
        </li>
        <li>
          <MdOutlineReviews />
          Reviews
        </li>
        <li>
          <IoPerson />
          Profile
        </li>
      </ul>
    </div>
  );
};

export default AdminModuleBar;
