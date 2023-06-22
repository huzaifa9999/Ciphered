import React from "react";
import ime from "../assests/login.jpg";
import { Box, Container } from "@mui/material";

const confessionCard = (e) => {
  return (
    <>
      <Box sx={{
        display:"flex",
        flexWrap:"wrap",
        marginX:"1rem",
      }}>
        <div className="flex flex-col items-start justify-center bg-[#1F1F1F] p-[1rem] max-w-[52rem] flex-wrap ">
          <div className="flex flex-row item-start justify-start   w-[100%] p-[.5rem]  ">
            <div className="image  flex  flex-row justify-center items-center p-[.5rem] ">
              <img
                src={ime}
                alt="userimg"
                className="rounded-[50%]  h-[2rem]  w-[2rem] border border-gray-500 border-2"
              />
            </div>
            <div className="username flex items-center jusitfy-center">
              <h1 className="text-[25px] text-white weight-500">huzaifa</h1>
            </div>
          </div>

          <div className="flex justify-center items-center ml-3 p-[1.5rem]flex-wrap h-auto border border-gray-500  ">
            <h2 className="text-[1rem] flex  items-center justify-center p-[1rem] ml-3 flex-wrap weight-700 text-white">
              Tailwind lets you conditionally apply utility classes in different
              states using variant modifiers. For example, use hover:mt-8 to
              only apply the mt-8 utility on hover.
            </h2>
          </div>
        </div>
      </Box>
    </>
  );
};

export default confessionCard;
