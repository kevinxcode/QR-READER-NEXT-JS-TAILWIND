// FloatingButton.js
import React from "react";

const TopBar = ({ data }) => {
  return (
    <div className="flex flex-nowrap fixed bg-gray-100  top-0 left-1/2 transform -translate-x-1/2 w-full h-12 items-center justify-center ">
      <p className="font-bold">{data}</p>
    </div>
  );
};

export default TopBar;
