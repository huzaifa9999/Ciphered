import React, { useState, useEffect } from "react";
import { Container, Box, Stack, Button, Avatar, useMediaQuery } from "@mui/material";
import logo from "../assests/icons8-batman-logo-1600-removebg-preview.png";
import "../index.css";
import { BiSolidGroup } from "react-icons/bi";
import axios from "axios";
import UserCard from "../components/UserCard";
import img from "../assests/wp5814594-naruto-uzumaki-minimal-art-wallpapers.jpg"


const Sidebar = () => {

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


            <div className="flex flex-col h-[100%] w-[10%] bg-[#0f111f]  items-center justify-start">
                <Avatar alt="Remy Sharp" src={logo} sx={{ width: 100, height: 100 }} />

                <div className="flex items-center flex-col justify-center p-[.5rem] gap-2">
                <Avatar alt="Remy Sharp" src={img} sx={{ width: 130, height: 130 }} />
<h1 className="text-white text-[1rem] m-[.5rem] "> HUZAIFA999</h1>
<Button variant="outlined">EDIT PROFILE</Button>
                </div>

            </div>
            <div className="flex flex-col h-[100%] w-[20%]  p-[.5rem] bg-[#050a0a] border border-black border-2 overflow-hidden hover:overflow-y-scroll">
                <div className="flex flex-row items-center justify-center text-white text-4xl  p-[.5rem] m-[1.75rem] mb-[1.25rem]">
                    <h1 className=" flex items-center flex-wrap  ">
                        <BiSolidGroup /> <span className="text-[2rem]"> Members</span>

                    </h1>
                </div>

                <Stack spacing={2}>
                    {data.map((e) => {
                        return (
                            <>
                                {" "}
                                <UserCard username={e.username} pfp={e.pfp} />
                            </>
                        );
                    })}
                </Stack>
            </div>

        </>
    )
}

export default Sidebar