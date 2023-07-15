import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, Stack, FormControl, FormLabel, Input, Button, Avatar, Divider } from "@mui/material";
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile } from '../actions/userActions';
const Profile = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [click, setClick] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error, } = userLogin;
  const dispatch = useDispatch();



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
          <h2 className=" text-4xl pb-[1.15rem] text-center text-[#b3ccdb] font-bold font-['Cormorant_Infant']"> <Link to="/confessions"><FaArrowLeft size={30} /></Link>MY PROFILE</h2>

          <div className='flex md:flex-row flex-col items-center justify-center gap-[4rem]'>

            <Avatar src={userInfo?.pfp} sx={{ height: 220, width: 220 }} />
            <div className='flex flex-col md:items-start items-center gap-5 p-[.5rem] ml-[3rem] '>

              <h2 className='text-[1.2rem] text-[#b3ccdb] font-["Crimson_Text"]  '>Username :
                <span className='m-[.2rem] ml-[1rem] text-[3rem] text-[#6d78ba] font-bold font-["Cormorant_Infant"] '>{userInfo?.username}</span></h2>
              <p className='text-[1.2rem] text-[#b3ccdb] font-["Crimson_Text"] '>Name:
                <span className='m-[.2rem] text-[2rem] ml-[1rem] text-[#6d78ba] font-semi-bold font-["Cormorant_Infant"]'>{userInfo?.name}</span></p>
              <p className='text-[1.2rem] text-[#b3ccdb] font-["Crimson_Text"]  '>Email:
                <span className='m-[.2rem] text-[2rem] ml-[1rem] text-[#6d78ba] font-semi-bold font-["Cormorant_Infant"]'>{userInfo?.email}</span></p>
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
        <Stack direction={'row'} spacing={2} divider={<Divider orientation="vertical" flexItem />}>
          {click ? "" :
            <Button variant="contained" color="error" onClick={() => { setClick(!click) }}>
              delete account        </Button>}
        </Stack>


      </Box>

    </>
  )
}

export default Profile