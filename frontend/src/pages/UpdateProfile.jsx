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
import { useDispatch, useSelector } from 'react-redux';
import { userDeleteReducer } from '../reducers/userReducers';
import { deleteProfile } from '../actions/userActions';
const UpdateProfile = () => {

  const navigate = useNavigate();
  // const { userId } = UserState();
  const [email, setEmail] = useState();
  // const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error, } = userLogin;
  const dispatch = useDispatch();
  // const { loading, error, userInfo } = userDeleteReducer;


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email)
      alert('Please enter your email')
    else dispatch(deleteProfile(email));
  }

  useEffect(() => {
    if (!userInfo)
      navigate("/");
  }, [navigate, userInfo])

  return (
    <>
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

              <h2 className='text-[1.2rem] text-white  '>Username :
                <span className='m-[.2rem] ml-[1rem] text-[3rem]'>{userInfo?.username}</span></h2>
              <p className='text-[1.2rem] text-white '>Name:
                <span className='m-[.2rem] text-[2rem] ml-[1rem]'>{userInfo?.name}</span></p>
              <p className='text-[1.2rem] text-white '>Email:
                <span className='m-[.2rem] text-[2rem] ml-[1rem] text-right'>{userInfo?.email}</span></p>
            </div>
          </div>

          {
            click ? <>

              <Container maxWidth="sm"
                className='p-[1rem] bg-black rounded-md bg-clip-padding backdrop-filter 
         backdrop-blur-lg bg-opacity-1  border-gray-100  mt-[1.2rem] m-[1rem]
rounded-[1rem] text-[#e7f4f2] shadow-[4px_4px_25px_rgba(8,_112,_184,_0.7)]' >
                <h2 className=" text-4xl pb-[1.15rem] text-center text-[#b3ccdb] font-bold">Are you sure?</h2>
                <Stack spacing={1}>
                  <FormControl id="email" isRequired>
                    <FormLabel>EMAIL</FormLabel>
                    <Input
                      
                      placeholder="Email"
                      sx={{
                        color: "white"
                      }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>

                  <Button variant="contained" color="success" onClick={() => setClick(!click)}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="error" onClick={handleSubmit}>
                    DELETE account
                  </Button>

                </Stack>
              </Container>


            </> : ""
          }
        </Container>
        <Stack direction={'row'} spacing={2} divider={<Divider orientation="vertical" flexItem />}>   {click ? "" : <Button variant="contained" color="error" onClick={() => { setClick(!click) }}>
          delete account        </Button>}  {click ? "" : <Button variant="contained" color="error" onClick={() => { setClick(!click) }}>
            update
          </Button>}</Stack>


      </Box>

    </>
  )
}

export default UpdateProfile