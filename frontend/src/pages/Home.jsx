import React, { useState } from "react";
// import "../index.css";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
// import loginimg from "../assests/login.jpg";
import {
  Container,
  Box,
  Tabs,
  Tab,
  TabPanel,
  Button,
  Typography,
} from "@mui/material";
const Home = () => {
  const [register, setRegister] = useState(true);

  const onclick = () => {
    setRegister(!register);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem",
            margin: "40px 0 15px 0",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.7)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.77)",
            backdropFilter: "blur( 9px )",
            // -webkit-backdrop-filter: "blur( 1px )",
            height: "100%",
            width: "100%",
            borderRadius: "20px",
          }}
        >
          <h1 className="text-white pt-[2.5rem] pb-[2rem] text-center text-5xl">
            Welcome to Confess
          </h1>

          {register ? <Login /> : <Register />}
          <Button onClick={onclick}>Don't have a account register here</Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
