import React from "react";
import CreatePost from "./CreatePost";
import LeftSidebar from "./LeftSidebar";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="flex  bg-[#f2f3f7] ">
      {/* Left Side Bar */}
      <LeftSidebar />
      <div className="mx-auto">
        {/* Stories */}
        <Stories />
        {/* CreatePost */}
        <CreatePost />
        {/* Posts */}
      </div>
      {/* Right Side Bar */}
    </div>
  );
};

export default Feed;
