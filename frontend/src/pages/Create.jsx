import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Box, Stack, FormControl, FormLabel, Input, Button } from "@mui/material";
import { UserState } from '../Context';

const CreateConfession = () => {

  const navigate = useNavigate();
  const { userId } = UserState();
  const [description, setConfession] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!description) {
      alert("please fill all fields");
      setLoading(false);
      return
    }

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
      <Container component="main" maxWidth="xs">
        <div className='bg-slate-500 text-white'>
          <h2 className="center text-4xl weight-700 pb-[1.15rem] bg-slate-700 text-white">Login here</h2>
          <Stack spacing={4}>
            <FormControl id="description" isRequired>
              <FormLabel>confession</FormLabel>
              <Input
                placeholder="confession"
                onChange={(e) => setConfession(e.target.value)}
              />
            </FormControl>

            <Button variant="contained" onClick={handleSubmit} isLoading={loading} >
              create
            </Button>
          </Stack>
        </div>
      </Container>
    </>
  )
}

export default CreateConfession