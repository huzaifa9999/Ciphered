import { Container, FormControl, FormLabel, Input, Stack,Button } from "@mui/material";
import React, { useState } from "react";

const Login = () => {
  const handleSubmit = () => {};
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
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

      <Button variant="contained">
        Sign-in
      </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Login;
