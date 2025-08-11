import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { createUser } from "../../services/apiProcessor.js";
import { ToastContainer, toast } from "react-toastify";
import useForm from "../../hooks/form.js";

const RegisterForm = () => {
  const initialState = {
    lName: "",
    fName: "",
    email: "",
    password: "",
    phone: "",
  };
  const { form, handleChange } = useForm(initialState);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await createUser({
        ...form,
      });
      if (result) {
        result.status
          ? toast.success("Please verify your email.")
          : toast.error("Failed to register. Try again!");
      }
    } catch (error) {
      console.log(error.message);
      alert("An error occured during registering.");
    }
  }
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
        value={form.fName}
        required
        fullWidth
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        name="lName"
        value={form.lName}
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
        value={form.email}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        required
        fullWidth
        value={form.password}
        onChange={handleChange}
      />
      <TextField
        label="Phone"
        name="phone"
        fullWidth
        value={form.phone}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "#3B38A0" }}
      >
        Submit
      </Button>
      <ToastContainer />
    </form>
  );
};

export default RegisterForm;
