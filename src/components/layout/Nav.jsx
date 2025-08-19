import React from "react";
import { GrLogin } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { userData } = useSelector((state) => state.userStore);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        bgcolor: "#3b38a0",
        fontSize: "1.3rem",
        color: "white",
      }}
    >
      <Box>
        <Link component={RouterLink} to="/" underline="none" color="inherit">
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <FaBook />
            BurrowABook
          </Box>
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link
          component={RouterLink}
          to="/login"
          underline="none"
          color="inherit"
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <IoPerson />
            {userData?._id ? userData.fName : "Login"}
          </Box>
        </Link>
        <Link
          component={RouterLink}
          to="/register"
          underline="none"
          color="inherit"
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <GrLogin />
            {userData?._id ? "Logout" : "Register"}
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Navigation;
