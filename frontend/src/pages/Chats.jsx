import React, { useState, useEffect } from "react";
import { Container, Box, Stack } from "@mui/material";
import "../index.css";
import axios from "axios";
import UserCard from "../components/auth/UserCard";
import ConfCard from "../components/confessionCard";

const Confessions = () => {
  const [data, setData] = useState([]);

  const allUsers = async () => {
    const res = await axios.get("/user/");
    const data = res.data;

    setData(data);
  };
  useEffect(() => {
    allUsers();
  }, []);

  return (
    <>
      <Container maxWidth>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: ".5rem",
            marginTop: "3rem",
          }}
        >
          <div className="h-[85vh] w-11/12 bg-slate-800 grid grid-template-cols-12 gap-1 rounded-[10px] ">
            
            
    <Box sx={{
        display:"flex",
        flexWrap:"wrap",
        
      }}>
            <div className="col-start-1 col-end-2 text-white border border-black border-x-[2px] p-[1rem] overflow-hidden hover:overflow-auto">
              <div className="flex flex-col items-center justify-center gap-2 px-[.25rem] py-[1.5rem] ">
                Group Members
                <Stack spacing={2} width={"100%"}>
                {data.map((e) => {
                  return (
                   
                      <UserCard username={e.username} pfp={e.pfp} />
                    
                  );
                })}</Stack>
              </div>
            </div></Box>
            <div className="col-start-3 col-end-13 text-white  overflow-hidden hover:overflow-auto ">
              <div className="flex flex-col gap-3 items-start justify-center ml-1 p-[1rem] ">
             <ConfCard/>
             <ConfCard/>
             <ConfCard/>
             <ConfCard/>
             <ConfCard/>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Confessions;
