import React, { useState, useEffect } from 'react'
import { UserState } from '../Context';
import logo from "../assests/icons8-batman-logo-1600-removebg-preview.png";
// import  from "react-icons"
import { IoArrowBackSharp } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import img from "../assests/wp5814594-naruto-uzumaki-minimal-art-wallpapers.jpg"
import { Container, Box, Stack, FormControl, FormLabel, Input, Button, Avatar, List, ListItem, ListItemButton, ListItemText, Listitem, Divider } from "@mui/material";
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const UpdateProfile = () => {

  const navigate = useNavigate();
  // const { userId } = UserState();
  const [username, setusername] = useState();
  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;


  const handleSubmit = async () => {
    // setLoading(true);
    // if (!username) {
    //   alert("please fill all fields");
    //   setLoading(false);
    //   return
    // }

    // const { data } = await axios.put(
    //   `user/update/${userId}`,
    //   { username },
    // );
    // console.log(data);
    // if (data) {
    //   localStorage.setItem('username', data.username);
    //   localStorage.setItem('pfp', data.pfp);
    //   localStorage.setItem('token', data.token);
    //   // const newToken = token.token;
    //   // localStorage.setItem('token', newToken);

    // }
    // setLoading(false);
    // navigate("/Confessions")

  }
  // const email=userInfo?.username;
  // console.log(email);
  return (
    <>

      {/* <div className="flex flex-row items-center justify-center z-1 text-white ">
        <FaArrowLeft size={50} />
        <div className="pic">
          <img src={logo} alt="icon" width="100rem" />
        </div>
        <div>
          {" "}
          <h1 className="text-white text-4xl  truncate">CRYPT</h1>

        </div>

      </div> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        // minHeight="90vh"
        height="100vh"
        bgcolor={'white'}
        color={'white'}
        id="cont"
        flexDirection={"column"}
      >
        <Container maxWidth="md"
          className='p-[2rem] m-[2rem]  bg-black rounded-md bg-clip-padding backdrop-filter 
         backdrop-blur-lg bg-opacity-1  border-gray-100
rounded-[1rem] text-[#e7f4f2] shadow-[4px_4px_25px_rgba(8,_112,_184,_0.7)] ' >
          <h2 className=" text-4xl pb-[1.15rem] text-center text-[#b3ccdb] font-bold"> <Link to="/confessions"><FaArrowLeft size={30} /></Link>MY PROFILE</h2>

          <div className='flex md:flex-row flex-col items-center justify-center gap-[4rem]'>

            <Avatar src={userInfo?.pfp} sx={{ height: 220, width: 220 }} />
            <div className='flex flex-col md:items-start items-center gap-5 p-[.5rem] ml-[3rem]'>

              <h2 className='text-[2.4rem] text-white '>{userInfo?.username}</h2>
              <p className='text-[1.2rem] text-white '>{userInfo?.name}</p>
              <p className='text-[1.2rem] text-white '>{userInfo?.email}</p>
            </div>
          </div>
        </Container>
        <Stack direction={'row'} spacing={2} divider={<Divider orientation="vertical" flexItem />}>   {click ? "" : <Button variant="contained" color="error" onClick={() => { setClick(!click) }}>
          delete account        </Button>}  {click ? "" : <Button variant="contained" color="error" onClick={() => { setClick(!click) }}>
            update
          </Button>}</Stack>

        {
          click ? <>

            <Container maxWidth="sm"
              className='p-[1rem] bg-black rounded-md bg-clip-padding backdrop-filter 
         backdrop-blur-lg bg-opacity-1  border-gray-100  mt-[.2rem]
rounded-[1rem] text-[#e7f4f2] shadow-[4px_4px_25px_rgba(8,_112,_184,_0.7)]' >
              <h2 className=" text-4xl pb-[1.15rem] text-center text-[#b3ccdb] font-bold">Are you sure?</h2>
              <Stack spacing={1}>
                <FormControl isRequired>
                  <FormLabel>password</FormLabel>
                  <Input
                    type={"password"}
                    placeholder="Password"
                    sx={{
                      color: "white"
                    }}
                  />
                </FormControl>

                <Button variant="contained" color="success" onClick={() => setClick(!click)} isLoading={loading}>
                  Cancel
                </Button>
                <Button variant="contained" color="error" onClick={handleSubmit} isLoading={loading}>
                  DELETE account
                </Button>

              </Stack>
            </Container>


          </> : ""
        }
      </Box>

    </>
  )
}

export default UpdateProfile