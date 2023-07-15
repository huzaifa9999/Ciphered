import { Box } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
const UserCard = (e) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "3rem",
          padding: ".7rem",
          display: "flex",
          alignItems: "center",

          paddingLeft: "1.25rem",
          "&:hover": {
            bgcolor: "#6d78ba",
          },

          gap: 3,
        }}
      >
        <div className="flex w-[100%] text-black ">
          <div className="flex items-center  ">
            <div className="self-center mr-2 ml-0">
              <Avatar alt="Remy Sharp" src={e.pfp} />
            </div>

            <div className="overflow-hidden truncate mb-0 text-[#e7f4f2] font-['Cormorant_Infant'] font-regular">
              <p className="text-[1.25rem]"> {e.username}</p>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default UserCard;
