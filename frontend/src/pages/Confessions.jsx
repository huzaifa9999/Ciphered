import React, { useState, useEffect, useRef } from "react";
import { Container, Box, Stack, Button, Avatar, useMediaQuery } from "@mui/material";
import Mbar from "../components/Mbar";
import logo from "../assests/icons8-batman-logo-1600-removebg-preview.png";
import "../index.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import ConfCard from "../components/confessionCard";
import Sidebar from "../components/sidebar";
const Confessions = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [posts, setPosts] = useState([]);


  const allConfessions = async () => {
    const {data} = await axios.get("confession/");
    // const data = res.data;
    console.log(data)
    setPosts(data);

  };


  const navigate = useNavigate();
  useEffect(() => {

    allConfessions();

  }, []);


  return (
    <>
      <div className="flex bg-black flex-row h-[100vh] w-[100%] border border-[#181818] border-6 ">
        {isNonMobileScreens ? <Sidebar /> : <Mbar />}

        <div
          className={`flex flex-col h-[100%]  ${isNonMobileScreens ? 'w-[70%]' : 'w-[100%]'} overflow-hidden `}
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

          <Link to="/create">
          {/* <Button variant="outlined" >Create Confession</Button>
           */}

           <button class="bg-[#b3ccdb] hover:bg-[#07091d] hover:text-[#b3ccdb] text-[#0f111f] ml-[2rem] mb-[1.5rem] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Create new Confession
              </button>

          </Link>

          <div className=" ml-[1rem] mb-[1rem] w-[100%] h-[100%] flex flex-col flex-grow text-white  overflow-hidden hover:overflow-y-scroll ">

            <Stack spacing={2}>
              {posts.map((e) => {
                return (
                  <>
                    <ConfCard
                      username={e.username}
                      pfp={e.pfp}
                      description={e.description}
                      createdAt={e.createdAt.split('T')[1].slice(0,5)}
                    />
                  </>
                );
              })}
            </Stack>
          </div>

        </div>

      </div>
    </>
  );
};

export default Confessions;
