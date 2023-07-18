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
    // console.log(pfps);
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
    profilePic();
    e.preventDefault();

    if (!email || !username || !password || !name) {
      alert('please fiill all fields')
      // return;
    }

    else if (password !== confirmpassword) {
      alert("password doesnt match");

    }

    else dispatch(register(name, email, username, password, pfp));

  };
  useEffect(() => {
    if (userInfo) {
      navigate("/confessions");
    }
  }, [navigate, userInfo]);

  return (
    <Container component="main" maxWidth="md">

      <div class="w-full">
        <form class="shadow-md  px-8 pt-6 pb-8 mb-4" >
          <div class="mb-4"  >
            <label class="block text-white text-lg font-bold mb-4 text-white" for="username"  >
              Username
            </label>
            <input onChange={(e) => setUsername(e.target.value)}
              class="shadow  transparent  bg-[#0f111f]  border-2 border-transparent  
            border-b-[#6d78ba] text-white  w-full py-2 px-3  leading-tight focus:outline-[#b3ccdb] 
             focus:shadow-outline" id="username" type="text" placeholder="Username(The username should not reveal who you are)" />
          </div>
          <div class="mb-4">
            <label class="block text-white text-lg font-bold mb-4 text-white" for="name">
              Name
            </label>
            <input onChange={(e) => setName(e.target.value)} class="shadow  transparent  bg-[#0f111f] 
             border-2 border-transparent  border-b-[#6d78ba] text-white  w-full py-2 px-3  leading-tight
              focus:outline-[#b3ccdb]  focus:shadow-outline" id="name" type="text" placeholder="Name" />
          </div>
          <div class="mb-4">
            <label class="block text-white text-lg font-bold mb-4 text-white" for="username">
              Email
            </label>
            <input onChange={(e) => setEmail(e.target.value)}
              class="shadow  transparent  bg-[#0f111f]  border-2 border-transparent  border-b-[#6d78ba]
               text-white  w-full py-2 px-3  leading-tight focus:outline-[#b3ccdb]  focus:shadow-outline"
              id="Email" type="text" placeholder="Email " />
          </div>
          <div class="mb-6">
            <label class="block text-white text-lg  font-bold mb-2" for="password">
              Password
            </label>
            <input onChange={(e) => setPassword(e.target.value)} class="shadow  transparent 
             bg-[#0f111f] border-2 border-transparent border-b-[#6d78ba]  w-full py-2 px-3 text-white mb-3 
             leading-tight focus:outline-[#b3ccdb] focus:shadow-outline" id="password" type="password"
              placeholder="******************" />
          </div>
          <div class="mb-6">
            <label class="block text-white text-lg  font-bold mb-2" for="password">
              Confirm Password
            </label>
            <input onChange={(e) => setConfirmPassword(e.target.value)} class="shadow  transparent
              bg-[#0f111f] border-2 border-transparent border-b-[#6d78ba]  w-full py-2 px-3 text-white mb-3
               leading-tight focus:outline-[#b3ccdb] focus:shadow-outline" id="Confirmpassword" type="password"
              placeholder="******************" />
          </div>



          <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">JPEG, PNG, JPG</p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" onChange={(e) => profilePic(e.target.files[0])} />
            </label>
          </div>


          <div class="flex items-center justify-center mt-[1rem]">
            <button onClick={handleSubmit} loading={loading}

              class="bg-[#b3ccdb] hover:bg-[#07091d] w-[15rem] hover:text-[#b3ccdb] text-[#0f111f] 
              font-bold py-2 px-4 rounded focus:outline-none
               focus:shadow-outline block text-xl  font-bold mb-2" type="button">
              Register
            </button>
          </div>
        </form>

      </div>






    </Container>
  );
};

export default Register;
