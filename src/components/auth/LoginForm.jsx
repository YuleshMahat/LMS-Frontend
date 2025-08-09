import react, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BasicExample() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        { email: userDetails.email, password: userDetails.password }
      );
      if (result) {
        result.data.status
          ? navigate("/dashboard")
          : alert("Username or password was incorrect");
      }
    } catch (error) {
      console.log(error.message);
      alert("An error occured during loggin in");
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
        height: "50vh",
        justifyContent: "space-around",
      }}
    >
      <Typography variant="h4">Login to BurrowABook</Typography>
      <TextField
        type="email"
        label="Email"
        name="email"
        required
        fullWidth
        onChange={handleChange}
        value={userDetails.email}
      />
      <TextField
        type="password"
        label="Password"
        name="password"
        required
        fullWidth
        onChange={handleChange}
        value={userDetails.password}
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "#3B38A0" }}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default BasicExample;
