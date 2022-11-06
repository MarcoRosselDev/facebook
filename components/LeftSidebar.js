import React from "react";
import guy from "../assets/guy7.jpg";
import { MdHome, MdGroups } from "react-icons/md";
import { BsCart3, BsPeopleFill, BsCalendar2Fill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineDesktop, AiFillClockCircle } from "react-icons/ai";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div className="w-[10rem]">
      <div className="flex flex-col pt-4 pl-7">
        <div className="flex items-center font-bold">
          <MdHome className="w-9 h-9" />
          <p className="ml-3">Home</p>
        </div>
        <div className="w-9 h-9 mt-4">
          <Image src={guy} className="rounded-full" />
        </div>
        <div className="border-b my-4"></div>
        <div className="space-y-6">
          <AiOutlineDesktop className="w-8 h-9" />
          <BsPeopleFill className="w-8 h-9" />
          <MdGroups className="w-8 h-9" />
          <BsCart3 className="w-8 h-9" />
          <BsCalendar2Fill className="w-7 h-7" />
          <AiFillClockCircle className="w-8 h-9" />
          <RiArrowDownSLine className="w-9 h-9" />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
