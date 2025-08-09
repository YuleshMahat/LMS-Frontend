import React from "react";
import { Container } from "@mui/material";
import RegisterForm from "../components/auth/RegisterForm.jsx";

const Register = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: "1",
      }}
    >
      <RegisterForm />
    </Container>
  );
};

export default Register;
