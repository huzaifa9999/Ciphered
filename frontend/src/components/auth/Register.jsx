import { useState } from "react";
import React from 'react'
import { Container, FormControl, FormLabel, Input, Stack,Button } from "@mui/material";

const Register = () => {
    const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [pfp,setPfp]=useState();
  const profilePic=(pics)=>{}
  const handleSubmit=()=>{}
  return (
    <Container component="main" maxWidth="xs">
    <h2 className="center text-4xl weight-700 pb-[1rem]">Register here</h2>
       <Stack spacing={1}>
        
         <FormControl id="name" isRequired>
           <FormLabel>Name</FormLabel>
           <Input
             placeholder="Name"
             onChange={(e) => setName(e.target.value)}
           />
            <FormControl id="username" isRequired>
           <FormLabel>UserName</FormLabel>
           <Input
             placeholder="Username"
             onChange={(e) => setUsername(e.target.value)}
           />
         </FormControl>
         </FormControl>
         <FormControl id="email" isRequired>
           <FormLabel>Email</FormLabel>
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
         <FormControl id="confirmpassword" isRequired>
           <FormLabel> COnfirm password</FormLabel>
           <Input
           type={"password"}
             placeholder="Confirm Password"
             onChange={(e) => setConfirmPassword(e.target.value)}
           />
         </FormControl>
         <FormControl id="pic" >
           <FormLabel>upload profile pic</FormLabel>
           <Input
             type="File"
             p={1.5}
             accept="image/*"
             onChange={(e) => profilePic(e.target.files[0])}
           />
         </FormControl>

     <Button variant="contained"
     onSubmit={handleSubmit}>
       Sign-up
     </Button>
       </Stack>
     </Container>
  )
}

export default Register