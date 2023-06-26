import React, { useState, useEffect } from "react";
import { Container, Box, Stack, Button, Avatar, useMediaQuery } from "@mui/material";
import Mbar from "../components/Mbar";

import logo from "../assests/icons8-batman-logo-1600-removebg-preview.png";
import "../index.css";

import axios from "axios";

import ConfCard from "../components/confessionCard";
import Sidebar from "../components/sidebar";
const Confessions = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [posts, setPosts] = useState([]);
  const allConfessions = async () => {
    const res = await axios.get("/confession/");
    const data = res.data;
    setPosts(data);
  };


  useEffect(() => {

    allConfessions();
  }, []);

  return (
    <>
      <div className="flex bg-black flex-row h-[100vh] w-[100%] border border-[#181818] border-6 ">
        {isNonMobileScreens ? <Sidebar /> : <Mbar />}

        <div
          className={`flex flex-col h-[100%]  ${isNonMobileScreens ? 'w-[70%]' : 'w-[100%]'} overflow-hidden hover:overflow-y-scroll`}
          id="cont" >
          <div className="flex flex-row items-center justify-center z-1  p-[.5rem] mb-[1.25rem]">
            <div className="pic">
              <img src={logo} alt="icon" width="100rem" />
            </div>
            <div>
              {" "}
              <h1 className="text-white text-4xl  truncate">CRYPT</h1>
                 
            </div>
          
          </div>
      
          <Button variant="outlined">CREATE CONFESSIOn</Button>

          <div className=" ml-[1rem] mb-[1rem] w-[100%] h-[100%] flex flex-col text-white ">
            <Stack spacing={2}>
              {posts.map((e) => {
                return (
                  <>
                    <ConfCard
                      username={e.username}
                      pfp={e.pfp}
                      description={e.description}
                    />
                  </>
                );
              })}
            </Stack>
          </div>
          {/* <div className="w-11/12 p-[1rem]">
          <Button variant="outlined">CREATE CONFESSIOn</Button></div> */}
        </div>
      
      </div>
    </>
  );
};

export default Confessions;
