import { Container, FormControl, FormLabel, Input, Stack, Button } from "@mui/material";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!username || !password) {
      alert("please fill all fields");
      setLoading(false);
      return;

    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "user/login",
        { username, password },
        config
      );
    
      const Username=data.username;
     const pfp=data.pfp;
     const id=data._id;
     const token=JSON.stringify(data.token);
      // console.log(data.pfp)
      alert("success");
      
      localStorage.setItem("username",Username);
      localStorage.setItem("pfp",pfp);
      localStorage.setItem("id",id);
      localStorage.setItem("token",token);
 
      setLoading(false);
      navigate("/confessions");
    } catch (error) {
      console.log(error.message);
      alert("an error has occured");
      setLoading(false);
      return;
    }

  };


  return (
    <>
      <Container component="main" maxWidth="xs">
        <h2 className="center text-4xl weight-700 pb-[1.15rem]">Login here</h2>
        <Stack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel>UserName</FormLabel>
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>password</FormLabel>
            <Input
              type={"password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button variant="contained" onClick={handleSubmit} isLoading={loading}>
            Sign-in
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Login;
