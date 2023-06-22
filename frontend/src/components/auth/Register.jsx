import { useState } from "react";
import React from "react";
import axios from "axios";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Alert,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [pfp, setPfp] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const profilePic = async (pfps) => {
    setPicLoading(true);
    if (pfps === undefined) {
      <Alert variant="filled" severity="error">
        Please upload an image only!!
      </Alert>;
      return;
    }
    console.log(pfps);
    if (pfps.type === "image/jpeg" || pfps.type === "image/png") {
      const formData = new FormData();
      formData.append("file", pfps);
      formData.append("upload_preset", "confess");
      formData.append("cloud_name", "dg9amdzm3");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dg9amdzm3/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const data = await res.json();
      setPfp(data.url.toString());
      console.log(data.url.toString());
      setPicLoading(false);
    } else {
      <Alert variant="filled" severity="error">
        Please upload an image only!!
      </Alert>;
      setPicLoading(false);
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPicLoading(true);
    if (!email || !username || !password || !name) {
      <Alert variant="filled" severity="error">
        please fill all fields
      </Alert>;

      setPicLoading(false);
      return;
    }

    if (password !== confirmpassword) {
      return <Snackbar autoHideDuration={6000} open="true" message="Note archived" />;

      // alert("recheck passsword");
      // return;
    }
    console.log(name, email, password, pfp);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/user",
        { name, email, password, username, pfp },
        config
      );

      <Alert variant="filled" severity="success">
        success
      </Alert>;

      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      navigate("/chats");
    } catch (error) {
      <Alert variant="filled" severity="error">
        dem
      </Alert>;
      setPicLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <h2 className="center text-4xl weight-700 pb-[1rem]">Register here</h2>
      <Stack spacing={1}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
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
        <FormControl id="pic">
          <FormLabel>upload profile pic</FormLabel>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => profilePic(e.target.files[0])}
          />
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSubmit}
          isLoading={picLoading}
        >
          Sign-up
        </Button>
      </Stack>
    </Container>
  );
};

export default Register;
