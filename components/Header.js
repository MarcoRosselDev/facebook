import React from "react";
import Image from "next/image";
import facebook from "../assets/facebook1.png";

const Header = () => {
  return (
    <div>
      <div className="">
        <div className="w-12 h-12">
          <Image src={facebook}></Image>
        </div>
      </div>
    </div>
  );
};

export default Header;
