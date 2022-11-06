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
    { profile: therock, background: therock20 },
    { profile: mikeprofile, background: mike },
    { profile: mrbeast, background: mrbeastbackground },
    { profile: kobe, background: kobebackground },
    { profile: arnold, background: arnoldbackground },
  ];

  return (
    <div className="flex space-x-4 p-4">
      {stories.map((story) => (
        <div className="flex w-16 h-32 sm:w-24 sm:h-40">
          <div className="flex">
            <Image
              src={story.background}
              className="object-cover rounded-[1rem]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
