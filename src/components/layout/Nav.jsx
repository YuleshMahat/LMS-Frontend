import React from "react";
import { GrLogin } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { InputGroup, Form } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { logoutAction } from "../../features/auth/authActions";
import useForm from "../../hooks/form.js";
import { FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.userStore);
  const { cartBooks } = useSelector((state) => state.cartStore);

  const initialState = { search: "" };
  const { form, handleChange } = useForm(initialState);

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
      {/* Brand and logo */}
      <Box>
        <Link component={RouterLink} to="/" underline="none" color="inherit">
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <FaBook />
            BorrowABook
          </Box>
        </Link>
      </Box>

      {/* Search Bar */}
      <Box className="searchBar">
        <InputGroup>
          <Form.Control
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="search"
            value={form.search}
            onChange={handleChange}
          />
          <InputGroup.Text
            id="basic-addon1"
            onClick={() => {
              navigate("/search?search=" + form.search);
            }}
            style={{ cursor: "pointer" }}
          >
            <IoIosSearch />
          </InputGroup.Text>
        </InputGroup>
      </Box>

      {/* Menu Options */}
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {/* Public Books */}
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            console.log("books buttoned clicked");
            navigate("/pub-books");
          }}
          style={{ cursor: "pointer" }}
        >
          Books
        </Box>

        {/* Dashboard */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {userData?._id && (
            <span
              onClick={() => {
                navigate("/dashboard");
              }}
              style={{ cursor: "pointer" }}
            >
              Dashboard
            </span>
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <IoPerson />
          {userData?._id ? (
            <span>{userData.fName}</span>
          ) : (
            <Link
              component={RouterLink}
              to="/login"
              underline="none"
              color="inherit"
            >
              <span>Login</span>
            </Link>
          )}
        </Box>

        {/* cart icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/cart");
          }}
        >
          {cartBooks?.length != 0 && (
            <div className="cartCounter">{cartBooks?.length}</div>
          )}
          {userData?._id && <FaShoppingCart />}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <GrLogin />
          {userData?._id ? (
            <span
              onClick={() => {
                dispatch(logoutAction());
              }}
              style={{ cursor: "pointer" }}
            >
              Logout
            </span>
          ) : (
            <Link
              component={RouterLink}
              to="/register"
              underline="none"
              color="inherit"
            >
              <span>Register</span>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
