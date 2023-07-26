import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Box, Stack, FormControl, TextareaAutosize } from "@mui/material";
import { useSelector } from 'react-redux';
import baseUrl from '../components/baseUrl';
import { FaArrowLeft } from 'react-icons/fa';
import io from 'socket.io-client';
const socket = io.connect(baseUrl);
const CreateConfession = () => {

  const navigate = useNavigate();
  const [description, setConfession] = useState();
  const [loading, setLoading] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!description) {
      alert('Please fill in all fields');
      setLoading(false);
      return;
    }

    const userId = userInfo?._id;

    try {

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post('confession/create', { userId, description }, config);
      socket.emit('newConfession', { username: userInfo.username, pfp: userInfo.pfp, description, createdAt: new Date() });
      setConfession('');
      // console.log(data);
      setLoading(false);
      navigate('/confessions');
    } catch (error) {
      console.error('Error creating confession:', error);
      setLoading(false);
    }
  };
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
        minHeight="100vh"
        bgcolor={'white'}
        color={'white'}
        id="cont"
      >
        <Container component="main" maxWidth="md"
          className='p-[2rem] m-[3rem]  bg-black rounded-md bg-clip-padding backdrop-filter 
          backdrop-blur-lg bg-opacity-1  border-gray-100 font-["Cormorant_Infant"] 
          rounded-[1rem] text-[#e7f4f2] shadow-[4px_4px_25px_rgba(8,_112,_184,_0.7)]' >
          <h2 className=" text-5xl pb-[1.15rem] text-center text-[#b3ccdb] font-bold"><Link to="/confessions"><FaArrowLeft size={30} /></Link>Confess here</h2>
          <Stack spacing={4}>
            <FormControl isRequired>
              <TextareaAutosize id="confession" minRows={6} cols={15} placeholder='Keep in mind about users privacy , dont write anything personal about anyone'

                className='text-[#b3ccdb] p-[1rem] text-[1.5rem] text-bold capitalize  bg-[#0f111f]/[0.85]'

                onChange={(e) => setConfession(e.target.value)}
              />
            </FormControl>
            <button onClick={handleSubmit} disabled={loading} isLoading={loading} class="bg-[#b3ccdb] hover:bg-[#07091d] hover:text-[#b3ccdb] 
            text-[#0f111f] font-bold py-2 px-4 rounded focus:outline-none 
            focus:shadow-outline" type="button">
              Create
            </button>
          </Stack>
        </Container>
      </Box>

    </>
  )
}

export default CreateConfession