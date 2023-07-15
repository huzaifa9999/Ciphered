import React from "react";
import Avatar from "@mui/material/Avatar";
const confessionCard = ({ username, pfp, description, createdAt }) => {
  const formattedTime = new Date(createdAt).toLocaleString(undefined, {
    hour: 'numeric',
    minute: 'numeric'
  });
 
  return (
    <>
        <div className="flex w-[100%] flex-col items-start hover:bg-[#6d78ba] p-[.2rem] h-auto gap-3  border border-transparent pb-[.55rem]  border-b-[#6d78ba]/[.19]">
          <div className="flex items-center ">
            <div className="self-center mr-2 ml-0">
              <Avatar alt="Remy Sharp" src={pfp} sx={{ width: 56, height: 56 }} />
            </div>

            <div className="overflow-hidden truncate mb-0 text-[#b3ccdb] flex flex-row items-center font-regular font-['Crimson_Text'] gap-2">
              <h2 className="text-[1.74rem] ml-[.5rem] ">{username}</h2> 
              
            </div>
          </div>

          <div className=" text-white h-auto ml-[4.5rem]  flex items-end justify-end mr-[.9rem] font-regular ">
            <p className="text-[1.2rem] ">
              {description}
            </p>
            <p className="ml-3 text-[.85rem] text-[#b3ccdb]">  {formattedTime}</p>
          </div>

        </div>
    </>
  );
};

export default confessionCard;
