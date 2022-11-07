import React from "react";

import albert from "../assets/1albert.jpg";
import arnold from "../assets/1arnold.jpg";
import drphil from "../assets/1drphil.webp";
import elon from "../assets/1elon.webp";
import kobe from "../assets/1kobe.webp";
import miketyson from "../assets/1miketyson.jpg";
import mrbeast from "../assets/1mrbeast.jpg";
import rihana from "../assets/1rihana.jpg";
import therock from "../assets/1rock.jpg";

import Image from "next/image";

import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import dots from "../assets/dots.png";

const RightSidebar = () => {
  const profiles = [
    { name: "Albert E.", photo: albert },
    { name: "Arnold S.", photo: arnold },
    { name: "Dr Phill", photo: drphil },
    { name: "Elon Musk", photo: elon },
    { name: "Kobe Briant", photo: kobe },
    { name: "Mike Tyson", photo: miketyson },
    { name: "Mr Beast", photo: mrbeast },
    { name: "Rihana", photo: rihana },
    { name: "The Rock", photo: therock },
  ];
  return (
    <div>
      <div className="pt-4 sm:pt-8 pr-7">
        <div className="flex items-center ">
          <p className="pr-4 font-bold">Contacts</p>
          <div className="space-x-2 flex items-center">
            <BsFillCameraVideoFill />
            <FiSearch />
            <div className="w-7 h-7">
              <Image src={dots} />
            </div>
          </div>
        </div>
        <div className="">
          {profiles.map((profiles) => (
            <div className="w-10 h-10">
              <img src={profiles.photo.src} alt="profile img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
