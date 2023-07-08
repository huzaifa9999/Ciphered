import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Box, Stack, FormControl, FormLabel, Input, Button, TextareaAutosize } from "@mui/material";
import { UserState } from '../Context';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';

const CreateConfession = () => {

  const navigate = useNavigate();
  // const { userId } = UserState();
  const [description, setConfession] = useState();
  const [loading, setLoading] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!description) {
      alert("please fill all fields");
      setLoading(false);
      return
    }
const userId=userInfo?._id;
    const data = await axios.post(
      "confession/create/",
      { userId, description },
    );
    console.log(data);

    setLoading(false);
    navigate("/Confessions")

  }




  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor={'white'}
        color={'white'}
        id="cont"
      >
        <Container component="main" maxWidth="md"
          className='p-[2rem] m-[3rem]  bg-black rounded-md bg-clip-padding backdrop-filter 
         backdrop-blur-lg bg-opacity-1  border-gray-100
rounded-[1rem] text-[#e7f4f2] shadow-[4px_4px_25px_rgba(8,_112,_184,_0.7)]' >
          <h2 className=" text-4xl pb-[1.15rem] text-center text-[#b3ccdb] font-bold"><Link to="/confessions"><FaArrowLeft size={30} /></Link>Confess here</h2>
          <Stack spacing={4}>
            <FormControl isRequired>


              <TextareaAutosize id="confession" minRows={6} cols={15} className='text-[#b3ccdb] p-[1rem] text-[1.5rem] text-bold capitalize  bg-[#0f111f]/[0.85]' 

onChange={(e) => setConfession(e.target.value)} 
              />
            </FormControl>


            <Button variant="contained" onClick={handleSubmit} isLoading={loading}>
              Confess
            </Button>
          </Stack>
        </Container>
      </Box>

    </>
  )
}

export default CreateConfession