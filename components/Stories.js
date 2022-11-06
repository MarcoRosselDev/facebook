import React from "react";
import therock from "../assets/therock.jpg";
import therock2 from "../assets/therock2.webp";
import therock20 from "../assets/therock20.jpg";
import mike from "../assets/1miketyson.jpg";
import mikeprofile from "../assets/mikeprofile.webp";
import mrbeastbackground from "../assets/mrbeastbackground.webp";
import mrbeast from "../assets/1mrbeast.jpg";
import kobebackground from "../assets/kobebackground.jpg";
import kobe from "../assets/1kobe.webp";
import arnoldbackground from "../assets/arnoldbackground.webp";
import arnold from "../assets/1arnold.jpg";
import Image from "next/image";

const Stories = () => {
  const stories = [
    { profile: therock, background: therock20, id: "23", key: "33" },
    { profile: mikeprofile, background: mike, id: "24", key: "34" },
    { profile: mrbeast, background: mrbeastbackground, id: "25", key: "35" },
    { profile: kobe, background: kobebackground, id: "26", key: "36" },
    { profile: arnold, background: arnoldbackground, id: "27", key: "37" },
  ];
  return (
    <div className="flex items-center w-screen h-36  sm:w-full px-2 mt-4 sm:mt-8">
      <div className="w-full   flex justify-between space-x-1 sm:space-x-4 p-1 mx-auto max-w-[25rem] sm:max-w-[33rem] px-2 bg-white rounded-[1rem] py-3 ">
        {stories.map((story) => (
          <div className="relative flex  w-[4.4rem] h-32  sm:w-24 sm:h-40 rounded-[1rem] ">
            <div className="flex">
              <Image
                src={story.background}
                key={story.id}
                className="flex object-cover rounded-[1rem]"
                alt="image"
              />
              <div className="flex absolute top-1 left-1 w-9 h-9 p-1 bg-blue-500 rounded-full">
                <Image
                  src={story.profile}
                  key={story.id2}
                  className="rounded-full object-cover"
                  alt="image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
