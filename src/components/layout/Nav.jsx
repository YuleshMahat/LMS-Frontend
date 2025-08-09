import React from "react";
import { GrLogin } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Navigation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        bgcolor: "#7A85C1",
        fontSize: "1.5rem",
        color: "black",
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
            Login
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
            Register
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Navigation;
