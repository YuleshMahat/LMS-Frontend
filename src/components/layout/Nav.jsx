import React from "react";
import { GrLogin } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { useSelector } from "react-redux";
import { InputGroup, Form } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";

const Navigation = () => {
  const { userData } = useSelector((state) => state.userStore);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        bgcolor: "#625fbcff",
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
      <Box className="searchBar">
        <InputGroup>
          <Form.Control
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon1">
            <IoIosSearch />
          </InputGroup.Text>
        </InputGroup>
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
