import react, { useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUserAction } from "../../features/auth/authActions.js";
import useForm from "../../hooks/form.js";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function BasicExample() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const initialState = { email: "", password: "" };
  const { form, handleChange } = useForm(initialState);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await dispatch(loginUserAction({ ...form }));
      if (result?.status) {
        toast.success("Login Successful");
      } else {
        toast.error("Username or password incorrect");
      }
    } catch (error) {
      console.log(error.message);
      alert("An error occured during loggin in");
    }
  }
  const { userData } = useSelector((store) => store.userStore);
  let previousLocation = location?.state?.from?.pathname || "/dashboard";

  useEffect(() => {});

  useEffect(() => {
    userData?._id && navigate(previousLocation);
  }, [userData?._id]);

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
      <ToastContainer />
    </form>
  );
}

export default BasicExample;
