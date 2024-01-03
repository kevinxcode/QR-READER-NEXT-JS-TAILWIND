// FloatingButton.js
import React from "react";

const TopBar = ({data}) => {

  return (
    <div class="flex flex-nowrap fixed bg-gray-100  top-0 left-1/2 transform -translate-x-1/2 w-full h-10 items-center justify-center " >
      <p class="font-bold">{data}</p>
    </div>
  );
};

export default TopBar;

