import React, { useState, useEffect } from "react";
import { Stack, Avatar } from "@mui/material";
import "../index.css";
import axios from "axios";
import UserCard from "../components/UserCard";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Mbar = () => {
    const [data, setData] = useState([]);
    const [click, setclick] = useState(false)
    const Click = () => setclick(!click);
    const allUsers = async () => {

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const res = await axios.get("/user/", config);
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

                    <h1 className="text-[#6d78ba] font-bold text-[3.2rem] m-[.5rem] font-['Crimson_Text']  " >{userInfo?.username}</h1>

                    <Link to="/MyProfile"><button class="bg-[#b3ccdb] hover:bg-[#07091d] hover:text-[#b3ccdb] text-[#0f111f] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        View Profile
                    </button></Link>
                    <br>

                    </br>

                    <button onClick={handleLogout} class="bg-[#b3ccdb] hover:bg-[#07091d] hover:text-[#b3ccdb] text-[#0f111f] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Logout
                    </button>

                    <div className="flex flex-col h-[100%] w-full p-[.5rem]  items-center  text-[1rem] overflow-hidden hover:overflow-y-scroll  ">
                        <h1 className="text-center text-[#b3ccdb] text-[3.5rem] m-[.75rem] font-bold  font-['Proza_Libret']">Members</h1>
                        <Stack spacing={2} width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
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

                </div>


            </div>



        </>
    )
}

export default Mbar