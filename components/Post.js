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
      {/* Image */}
      {/* number of Likes + buttons */}
      {/* comment section */}
      {/* Input */}
    </div>
  );
};

export default Post;
