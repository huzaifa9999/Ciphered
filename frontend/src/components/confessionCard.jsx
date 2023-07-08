import React from "react";
// import ime from "../assests/login.jpg";
import { Box, Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
const confessionCard = (e) => {
 
  return (
    <>
        <div className="flex w-[100%] flex-col items-start hover:bg-[#6d78ba] p-[.2rem] h-auto gap-3 ">
          <div className="flex items-center ">
            <div className="self-center mr-2 ml-0">
              <Avatar alt="Remy Sharp" src={e.pfp} sx={{ width: 56, height: 56 }} />
            </div>

            <div className="overflow-hidden truncate mb-0 text-[#b3ccdb] font-semi-bold flex flex-row items-center  gap-2">
              <h2 className="text-[1.6rem] ml-[.5rem]">{e.username}</h2> 
              
            </div>
          </div>

          <div className=" text-white h-auto ml-[4.5rem] flex  mr-[.9rem] font-regular flex">
            <p>
              {e.description}
            </p>
            <p className="ml-3 text-slate-400">  {e.createdAt}</p>
          </div>

        </div>
      {/* </Box> */}
    </>
  );
};

export default confessionCard;
