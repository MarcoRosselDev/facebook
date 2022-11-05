import React from "react";
import Image from "next/image";
import facebook from "../assets/facebook1.png";
import { MdHome } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const Header = () => {
  return (
    <div className="p-5 flex items-center justify-between">
      {/* left Side */}
      <div className="flex items-center">
        <div className="w-12 h-12">
          <Image src={facebook}></Image>
        </div>
        <div className="ml-2">
          <input
            type="text"
            placeholder="Search Facebook"
            className="ml-2 outline-0 bg-[#f2f3f7] p-2 rounded-full pl-4"
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
    </div>
  );
};

export default Header;
