import React from "react";
import Image from "next/image";
import facebook from "../assets/facebook1.png";
import { MdHome } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import user from "../assets/guy7.jpg";

const Header = () => {
  return (
    <div className="p-4 flex items-center justify-between border-b lg:px-10">
      {/* left Side */}
      <div className="flex items-center">
        <div className="w-12 h-12">
          <Image src={facebook} alt="logo of facebook"></Image>
        </div>
        <div className="ml-2">
          <input
            type="text"
            placeholder="Search Facebook"
            className="ml-2 outline-0 bg-[#f2f3f7] p-3 rounded-full pl-4 hidden sm:block"
          />
        </div>
      </div>
      {/* middle */}
      <div className="flex items-center space-x-7">
        <MdHome className="w-8 h-9" />
        <FiFlag className="w-7 h-6" />
        <FiPlayCircle className="w-8 h-7" />
        <BsCart3 className="w-7 h-7" />
        <GrGroup className="w-7 h-7" />
      </div>
      {/* Right Side */}
      <div className="flex space-x-7 items-center">
        <div className=" space-x-6 hidden lg:flex">
          <GrAppsRounded className="w-7 h-7" />
          <FaBell className="w-7 h-7" />
          <AiOutlineMessage className="w-7 h-7" />
        </div>
        <div className="w-10 h-10">
          <Image src={user} className="rounded-full" alt="user image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
