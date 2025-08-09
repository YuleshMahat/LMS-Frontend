import React from "react";
import LoginForm from "../components/auth/LoginForm.jsx";
import { Box, Container } from "@mui/material";

const Login = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: "1",
      }}
    >
      <LoginForm />
    </Container>
  );
};

export default Login;
