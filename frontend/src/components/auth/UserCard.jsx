import { Box } from "@mui/material";
import React from "react";

const UserCard = (e) => {

  const handleClick=()=>{

  }
  return (
    <>

      <div
        className="flex flex-row  items-center justify-start  bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100
m-[.3rem] max-h-[3.2rem] min-w-[90%]"
    onClick={handleClick}  >
        <div className="image  flex justify-center items-center p-[.5rem]  ">
          <img
            src={e.pfp}
            alt="userimg"
            className="rounded-[50%]  h-[2.9rem]  w-[2.9rem] border border-gray-500 border-4"
          />
        </div>
        <div className="username flex p-[2px] m-[3px]">
          <h1 className="text-2xl text-white weight-500">{e.username}</h1>
        </div>
      </div>
     
    </>
  );
};

export default UserCard;
