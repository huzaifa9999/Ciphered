import React, { useState, useEffect, useContext } from "react";
import { Container, Box, Stack, Button, Avatar, useMediaQuery } from "@mui/material";
import logo from "../assests/icons8-batman-logo-1600-removebg-preview.png";
import "../index.css";
import { BiSolidGroup } from "react-icons/bi";
import axios from "axios";
import UserCard from "../components/UserCard";
// import img from "../assests/wp5814594-naruto-uzumaki-minimal-art-wallpapers.jpg"
import { UserState } from "../Context";


const Sidebar = () => {
    const { username, userpfp } = UserState();

    const [data, setData] = useState([]);
    const allUsers = async () => {
        const res = await axios.get("/user/");
        const data = res.data;
        setData(data);
    };
//     const [auth ,setAuth]=useState(usertoken);
// const allUsers=async()=>{
//     try{
//         const config={
//             headers:{
//                 Authorization: `Bearer ${auth}`,
//             },
//         }

//         const {data}= await axios.get("/user/",config);
//         setData(data);
//     }catch(e){console.log(e);}
// }


    useEffect(() => {
        allUsers();

    }, []);


    return (



        <>



            <div className="flex flex-col h-[100%] w-[10%] bg-[#0f111f]  items-center justify-start">
                <Avatar alt="Remy Sharp" src={logo} sx={{ width: 100, height: 100 }} />

                <div className="flex items-center flex-col justify-center p-[.5rem] gap-2">
                    <Avatar alt="Remy Sharp" src={userpfp} sx={{ width: 130, height: 130 }} />
                    <h1 className="text-white text-[1rem] m-[.5rem] "> {username}</h1>
                    <Button variant="outlined">EDIT PROFILE</Button>
                    <Button variant="outlined">Delete account</Button>
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