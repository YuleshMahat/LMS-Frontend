import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    lName: "",
    fName: "",
    email: "",
    password: "",
    phone: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:4000/api/v1/auth/register",
        {
          email: userDetails.email,
          password: userDetails.password,
          fName: userDetails.fName,
          lName: userDetails.lName,
          phone: userDetails.phone,
        }
      );
      if (result) {
        result.data.status
          ? navigate("/login")
          : alert("Username or password was incorrect");
      }
    } catch (error) {
      console.log(error.message);
      alert("An error occured during registering.");
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "1000px",
        margin: "3rem",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#B2B0E8",
        padding: "2rem",
        borderRadius: "7px",
        minHeight: "50vh",
        justifyContent: "space-around",
        gap: "1rem",
      }}
    >
      <Typography variant="h4">Register to start burrowing.</Typography>
      <TextField
        label="First Name"
        name="fName"
        value={userDetails.fName}
        required
        fullWidth
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        name="lName"
        value={userDetails.lName}
        required
        fullWidth
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        required
        fullWidth
        value={userDetails.email}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        required
        fullWidth
        value={userDetails.password}
        onChange={handleChange}
      />
      <TextField
        label="Phone"
        name="phone"
        fullWidth
        value={userDetails.phone}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "#3B38A0" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default RegisterForm;
