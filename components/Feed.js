import React from "react";
import LeftSidebar from "./LeftSidebar";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="flex">
      {/* Left Side Bar */}
      <LeftSidebar />
      {/* Stories */}

      <Stories />
      {/* CreatePost */}
      {/* Posts */}
      {/* Right Side Bar */}
    </div>
  );
};

export default Feed;
