import React from "react";
import guy from "../assets/guy7.jpg";
import dots from "../assets/dots.png";
import car from "../assets/c-class.jpg";
import hearth from "../assets/hearth.png";
import like from "../assets/like.png";
import { BiLike, BiSmile } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import share from "../assets/share.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";

const Post = () => {
  return (
    <div className="bg-white rounded-[1rem] px-5 py-4 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <div className="w-12 h-12">
            <Image src={guy} className="rounded-full" />
          </div>
          <div className="ml-3">
            <p className="font-bold ">Joe Doe</p>
            <div className="flex">
              <p className="text-xs">3 hours ago &#8226;</p>
              <BiWorld className="ml-1 shrink-0" />
            </div>
          </div>
        </div>

        <div className="w-10 h-10">
          <Image src={dots} />
        </div>
      </div>
      {/* Input */}
      <div className="my-3">
        <p>My brand new car</p>
      </div>
      {/* Image */}
      <div className="-mx-5">
        <Image src={car} />
      </div>
      {/* number of Likes + buttons */}
      <div className="flex justify-between text-[#8e8d8d] mt-2">
        <div className="flex  items-center">
          <div className="h-[1.2rem] w-[1.2rem]">
            <Image src={like} />
          </div>
          <div className="h-5 w-5 ml-[2px]">
            <Image src={hearth} />
          </div>
          <p className="pl-2">Emily Doe and another 351</p>
        </div>
        <p>377 Comments</p>
      </div>
      {/* comment section */}
      {/* Input */}
    </div>
  );
};

export default Post;
