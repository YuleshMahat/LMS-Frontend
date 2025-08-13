import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { verifyEmail } from "../services/apiProcessor.js";

const Verify = () => {
  const location = useLocation();
  const [isLoading, setLoading] = useState("false");
  const urlParams = new URLSearchParams(location.search);
  useEffect(() => {
    const checkLoading = async () => {
      setLoading(true);
      const token = urlParams.get("t");
      const email = urlParams.get("email");
      console.log(token, email);
      try {
        const result = await verifyEmail({ t: token, email: email });
        if (result && result.status) {
          console.log("user verification complete.");
          setLoading(false);
        }
      } catch (error) {
        console.log("Error using the api processor");
      }
    };
    checkLoading();
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      {isLoading ? (
        <Box>
          <Button>Loading</Button>
          <Typography>Please wait until we verify your email</Typography>
        </Box>
      ) : (
        <Box>Your email has been verified.</Box>
      )}
    </Container>
  );
};

export default Verify;
