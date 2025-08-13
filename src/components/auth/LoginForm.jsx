import react from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../../features/auth/authActions.js";
import useForm from "../../hooks/form.js";
import { useDispatch } from "react-redux";

function BasicExample() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = { email: "", password: "" };
  const { form, handleChange } = useForm(initialState);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await dispatch(loginUserAction({ ...form }));
      if (result?.status) {
        navigate("/dashboard");
      } else {
        alert("Username or password was incorrect");
      }
    } catch (error) {
      console.log(error.message);
      alert("An error occured during loggin in");
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
        value={form.email}
      />
      <TextField
        type="password"
        label="Password"
        name="password"
        required
        fullWidth
        onChange={handleChange}
        value={form.password}
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
