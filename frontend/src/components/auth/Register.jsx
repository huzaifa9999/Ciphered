import { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux"
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import { register } from "../../actions/userActions";
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [pfp, setPfp] = useState();
  const [picLoading, setPicLoading] = useState(false);


  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const profilePic = async (pfps) => {
    // setPicLoading(true);
    if (pfps === undefined) {
      <Alert variant="filled" severity="error">
        Please upload an image only!!
      </Alert>;
      return;
    }
    console.log(pfps);
    if (pfps.type === "image/jpeg" || pfps.type === "image/png" || pfps.type === "image/jpg") {
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
      // setPicLoading(false);
    } else {
      <Alert variant="filled" severity="error">
        Please upload an image only!!
      </Alert>;
      // setPicLoading(false);
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !password || !name) {
      alert('please fiill all fields')
      // return;
    }

    else if (password !== confirmpassword) {
      alert("password doesnt match");

    }
    // console.log(name, email, password, pfp);
    else dispatch(register(name, email, username, password, pfp));

  };
  useEffect(() => {
    if (userInfo) {
      navigate("/confessions");
    }
  }, [navigate, userInfo]);

  return (
    <Container component="main" maxWidth="md">
      {/* <h2 className="center text-4xl weight-700 pb-[1rem]">Register here</h2>
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
        // isLoading={picLoading}
        >
          Sign-up
        </Button>
      </Stack> */}

      <div class="w-full">
        <form class="shadow-md  px-8 pt-6 pb-8 mb-4" >
          <div class="mb-4">
            <label class="block text-white text-lg font-bold mb-4 text-white" for="username">
              Username
            </label>
            <input onChange={(e) => setUsername(e.target.value)}
              class="shadow  transparent  bg-[#0f111f]  border-2 border-transparent  
            border-b-[#6d78ba] text-white  w-full py-2 px-3  leading-tight focus:outline-[#b3ccdb]  focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div class="mb-4">
            <label class="block text-white text-lg font-bold mb-4 text-white" for="name">
              Name
            </label>
            <input onChange={(e) => setName(e.target.value)} class="shadow  transparent  bg-[#0f111f]  border-2 border-transparent  border-b-[#6d78ba] text-white  w-full py-2 px-3  leading-tight focus:outline-[#b3ccdb]  focus:shadow-outline" id="name" type="text" placeholder="Name" />
          </div>
          <div class="mb-4">
            <label class="block text-white text-lg font-bold mb-4 text-white" for="username">
              Email
            </label>
            <input onChange={(e) => setEmail(e.target.value)}
              class="shadow  transparent  bg-[#0f111f]  border-2 border-transparent  border-b-[#6d78ba] text-white  w-full py-2 px-3  leading-tight focus:outline-[#b3ccdb]  focus:shadow-outline" id="Email" type="text" placeholder="Email" />
          </div>
          <div class="mb-6">
            <label class="block text-white text-lg  font-bold mb-2" for="password">
              Password
            </label>
            <input onChange={(e) => setPassword(e.target.value)} class="shadow  transparent  bg-[#0f111f] border-2 border-transparent border-b-[#6d78ba]  w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-[#b3ccdb] focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div class="mb-6">
            <label class="block text-white text-lg  font-bold mb-2" for="password">
              Confirm Password
            </label>
            <input onChange={(e) => setConfirmPassword(e.target.value)} class="shadow  transparent  bg-[#0f111f] border-2 border-transparent border-b-[#6d78ba]  w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-[#b3ccdb] focus:shadow-outline" id="Confirmpassword" type="password" placeholder="******************" />
          </div>
          <FormControl color="secondary"  className="text-white" id="pic">
            <FormLabel color="secondary" className="text-white"><h1 className="block text-white text-lg  font-bold mb-2">upload profile pic</h1></FormLabel>
            <Input
            color="secondary"
              type="file"
              p={1.5}
              accept="image/*"
              onChange={(e) => profilePic(e.target.files[0])}
            />
          </FormControl>
          <div class="flex items-center justify-center mt-[1rem]">
            <button onClick={handleSubmit} 
            class="bg-[#b3ccdb] hover:bg-[#07091d] w-[15rem] hover:text-[#b3ccdb] text-[#0f111f] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block text-xl  font-bold mb-2" type="button">
              Register
            </button>
          </div>
        </form>

      </div>






    </Container>
  );
};

export default Register;
