import React from "react";

import Image from "next/image";
import guy from "../assets/guy7.jpg";
import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png";
import nouser from "../assets/nouser.png";
import { useSession, signIn, signOut } from "next-auth/react";

const CreatePost = () => {
  const { data: session } = useSession();
  return (
    <div className="w-screen sm:w-full ">
      <div className="max-w-[25rem] sm:max-w-[33rem] mx-auto  sm:px-2 bg-white rounded-[1rem] ">
        <div className=" mt-8 flex items-center w-full p-3 pt-4 ">
          <div className="w-12 h-12 shrink-0">
            <img
              src={session?.user?.image}
              className="rounded-full "
              key="1"
              alt="user image"
            />
          </div>
          <div className="flex items-center ml-5 w-full  ">
            <input
              type="text"
              placeholder="What's on your mind Joe Doe?"
              className="outline-0 bg-[#f2f3f7] p-1 rounded-full pl-3 w-full h-12 truncate"
              ref={guy}
            />
          </div>

          <div
            className="flex items-center bg-blue-500 px-3 rounded-full h-10 ml-4"
            onClick={() => console.log("somethin later")}
          >
            <button className="font-bold text-white">
              Post
              {() => console.log("somethin later")}
            </button>
          </div>
        </div>

        <div className="">
          {/* {image ? (
            <div className="" onClick={() => setImage("")}>
              <img src={image} className="p-4" alt="" />
            </div>
          ) : (
            ""
          )} */}
        </div>

        <div
          className="
        border-b mb-4 mt-2"
        ></div>
        <div className="flex justify-between px-3 sm:mx-9 pb-3">
          <div className="flex items-center">
            <div className="w-7 h-7">
              <Image src={camera} alt="image" key="2" />
            </div>
            <p className="pl-2  whitespace-nowrap text-[14px]">Live Video</p>
          </div>

          <div
            className="flex items-center"
            onClick={() => console.log("helo")}
          >
            <div className="w-7 h-7">
              <Image src={photos} alt="image" key="3" />
              <input
                type="file"
                className="hidden"
                // ref={imageRef}
                // onChange={addImageToState}
              />
            </div>
            <p className="pl-2   text-[14px]">Photo/Video</p>
          </div>

          <div className="flex items-center">
            <div className="w-7 h-7">
              <Image src={smile} alt="image" key="5" />
            </div>
            <p className="pl-2   text-[14px]">Feeling/Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
