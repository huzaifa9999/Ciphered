import React, { useState } from "react";
// import "../index.css";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import logo from "../assests/icons8-batman-logo-1600-removebg-preview.png"
// import loginimg from "../assests/login.jpg";
import {
  Container,
  Box,
  Tabs,
  Tab,
  TabPanel,
  Button,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
const Home = () => {
  const [register, setRegister] = useState(true);

  const onclick = () => {
    setRegister(!register);
  };

  return (
    <>
      <Container maxWidth="md">

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          // minHeight="100vh"
          bgcolor={'black'}
          marginTop={"2rem"}
          color={'white'}
        // id="cont"
        // background="black"
        >
          <Container component="main" maxWidth="md"
            className='p-[1.6rem] m-[2rem]  bg-black rounded-md bg-clip-padding backdrop-filter 
         backdrop-blur-lg bg-opacity-1  border-gray-100 flex flex-col items-center justify-center
rounded-[1rem] text-[#e7f4f2] shadow-[4px_4px_25px_rgba(8,_112,_184,_0.7)]' >
            <div className="flex items-center justify-center "> <Avatar src={logo} sx={{
              height: "130px",
              width: "130px"
            }} /></div>
            <h1 className="text-[#b3ccdb] pb-[.5rem] text-center text-5xl">
              Welcome to Crypt
            </h1>
            <Stack>
            {register ? <Login /> : <Register />}
            <Button onClick={onclick}>Don't have a account register here</Button>
            </Stack>
          </Container>
        </Box>
      </Container>

      {/* </Container> */}
    </>
  );
};

export default Home;
