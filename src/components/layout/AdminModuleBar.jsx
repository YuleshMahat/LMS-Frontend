import React, { useEffect, useState } from "react";
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
import { IoBookSharp } from "react-icons/io5";
import { IoIosBriefcase } from "react-icons/io";

const AdminModuleBar = () => {
  const { userData } = useSelector((state) => state.userStore);
  const menuOptions = [
    {
      link: "/dashboard",
      label: "Dashboard",
      icon: <MdSpaceDashboard />,
      isAdmin: false,
    },
    {
      link: "/books",
      label: "Books",
      icon: <FaBook />,
      isAdmin: false,
    },
    { link: "/users", label: "Users", icon: <PiUsers />, isAdmin: true },
    { link: "/admins", label: "Admins", icon: <RiAdminFill />, isAdmin: true },
    {
      link: "/borrows",
      label: "Borrows",
      icon: <PiBooks />,
      isAdmin: true,
    },
    {
      link: "/my-borrows",
      label: "My Borrows",
      icon: <IoIosBriefcase />,
      isAdmin: false,
    },
    {
      link: "/reviews",
      label: "Reviews",
      icon: <MdOutlineReviews />,
      isAdmin: true,
    },
    {
      link: "/profile",
      label: "Profile",
      icon: <IoPerson />,
      isAdmin: false,
    },
  ];

  const [filteredMenuOptions, setFilteredMenuOptions] = useState();
  //use Effect to load correct menuOptions
  useEffect(() => {
    const tempMenuOptions = menuOptions.filter(
      (option) => userData._id == "admin" || !option.isAdmin
    );
    console.log(111, tempMenuOptions);
    setFilteredMenuOptions(tempMenuOptions);
  }, []);

  return (
    <div className="moduleBar">
      <IoBookSharp size={80} />
      <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
        Welcome {userData.fName}
      </Typography>
      <Divider sx={{ border: "solid white 2px", width: "100%", my: 1 }} />
      <ul className="moduleOptions">
        {filteredMenuOptions.map((option) => {
          return (
            <li>
              {option.icon}{" "}
              <Link
                component={RouterLink}
                to={option.link}
                underline="none"
                color="white"
              >
                {option.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminModuleBar;
