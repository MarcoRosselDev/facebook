import React from "react";
import Image from "next/image";
import facebook from "../assets/facebook1.png";

const Header = () => {
  return (
    <div className="p-5">
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
    </div>
  );
};

export default Header;
