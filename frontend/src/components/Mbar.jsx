import React, { useState, useEffect } from "react";
import { Container, Box, Stack, Button, Avatar, useMediaQuery } from "@mui/material";
import { HiUserGroup } from "react-icons/hi";
import logo from "../assests/icons8-batman-logo-1600-removebg-preview.png";
import "../index.css";
import { BiSolidGroup } from "react-icons/bi";
import axios from "axios";
import img from "../assests/wp5814594-naruto-uzumaki-minimal-art-wallpapers.jpg"
import UserCard from "../components/UserCard";

import { FaBars, FaTimes } from 'react-icons/fa';

const Mbar = () => {

    const [click, setclick] = useState(false)
    const Click = () => setclick(!click);

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
            <div id="cont">

                <div onClick={Click} className=" m-[.75rem] mt-[2rem]">
                    {click ? (<FaTimes size={30} style={{ color: 'white' }} />) : (<FaBars size={30} style={{ color: 'white' }} />)}

                </div>
                <div className={`flex flex-col items-center  justify-start gap-3 text-white p-[1rem] z-10 w-[100%] h-[100vh] absolute ${click ? 'left-0' : 'left-[-100%]'} ease-in-out duration-300`} id="cont">

                    <Avatar alt="Remy Sharp" src={img} sx={{ width: 200, height: 200 }} />

                    <h1 className="text-white text-[1.5rem] m-[1rem]" >USERNAME</h1>
                    <Button variant="outlined">EDIT PROFILE</Button>
                   
                    <div className="flex flex-col h-[100%] w-full p-[.5rem]  items-center  text-[1rem] overflow-hidden hover:overflow-y-scroll  ">
                    <h1 className="text-center">USERS</h1>
                    <Stack spacing={2} width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    {data.map((e) => {
                        return (
                            <>
                                {" "}
                                <UserCard username={e.username} pfp={e.pfp}/>
                            </>
                        );
                    })}
                </Stack>
            </div>

                </div>


            </div>



        </>
    )
}

export default Mbar