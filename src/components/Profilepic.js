import React from "react";
import { MdVerified } from "react-icons/md";

const Profilepic = () => {
  return (
    <div className="w-full h-auto lg:hidden md:hidden sm:block block text-white">
      <div className="w-full h-auto flex lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-8 justify-center mb-3">
        <img
          src="./pp1.jpg"
          alt=""
          className="rounded-full w-40 h-40 object-cover"
        ></img>
      </div>
      <div className="flex items-center justify-center text-2xl mb-1 text-white gap-1">
        Photos by Delvin Reyes 
        <div className="text-blue-400 text-sm py-2">
          <MdVerified/>
        </div>
      </div>
      <div className="flex items-center justify-center  mb-1 text-white">
        Brooklyn, New York
      </div>
    </div>
  );
};

export default Profilepic;
