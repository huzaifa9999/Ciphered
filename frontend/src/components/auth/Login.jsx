import { Container, FormControl, FormLabel, Input, Stack, Button } from "@mui/material";
import React, { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../actions/userActions";
// import Cookie from "js-cookie";
import {useDispatch, useSelector} from "react-redux"
const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [loading, setLoading] = useState(false);
const dispatch = useDispatch();
const userLogin=useSelector((state)=>state.userLogin);

const{loading,error,userInfo}=userLogin;

useEffect(() => {

  if(userInfo){
    navigate("/confessions");
  }
}, [navigate,userInfo])

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email,password));
    
  };


  return (
    <>
      <Container component="main" maxWidth="xs">
        <h2 className="center text-4xl weight-700 pb-[1.15rem]">Login here</h2>
        <Stack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel>UserName</FormLabel>
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
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

          <Button variant="contained" onClick={handleSubmit} >
            Sign-in
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Login;
