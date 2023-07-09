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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
// import { UserState } from "../Context";

const Mbar = () => {
    const [data, setData] = useState([]);
    const [click, setclick] = useState(false)
    const Click = () => setclick(!click);
    const allUsers = async () => {
        const res = await axios.get("/user/");
        const data = res.data;
        setData(data);


    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const handleLogout = (e) => {
        dispatch(logout());
        navigate("/")
    }
    useEffect(() => {
        // userDetails();
        allUsers();

    }, []);


    return (
        <>
            <div id="cont">

                <div onClick={Click} className=" m-[.75rem] mt-[2rem]">
                    {click ? (<FaTimes size={30} style={{ color: 'white' }} />) : (<FaBars size={30} style={{ color: 'white' }} />)}

                </div>
                <div className={`flex flex-col items-center  justify-start gap-3 text-white p-[1rem] z-10 w-[100%] h-[100vh] absolute ${click ? 'left-0' : 'left-[-100%]'} ease-in-out duration-300`} id="cont">

                    <Avatar alt="Remy Sharp" src={userInfo?.pfp} sx={{ width: 200, height: 200 }} />

                    <h1 className="text-[#6d78ba] font-bold text-[3rem] m-[.5rem]" >{userInfo?.username}</h1>
                    {/* <Button variant="outlined">EDIT PROFILE</Button> */}

                    <Link to="/MyProfile"><button class="bg-[#b3ccdb] hover:bg-[#07091d] hover:text-[#b3ccdb] text-[#0f111f] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    View Profile
                </button></Link>
                <br>

                </br>
                {/* <Button variant="contained" onClick={handleLogout}>logout</Button>
                 */}
                <button onClick={handleLogout} class="bg-[#b3ccdb] hover:bg-[#07091d] hover:text-[#b3ccdb] text-[#0f111f] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Logout
                </button>
                   
                    <div className="flex flex-col h-[100%] w-full p-[.5rem]  items-center  text-[1rem] overflow-hidden hover:overflow-y-scroll  ">
                    <h1 className="text-center text-[#b3ccdb] text-[3rem] m-[.75rem] font-bold">Members</h1>
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