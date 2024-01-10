// FloatingButton.js
import React, { useEffect, useState } from "react";
import { getConnectionIndicator } from "../lib/_jsquerlab";

const TopBar = ({ data }) => {
  const [isConnected, setIsConnected] = React.useState(true);
  useEffect(() => {
    getIndicator();
  });

  const getIndicator = async () => {
    setInterval(function () {
      getConnectionIndicator().then((data) => {
        if (data != null) {
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      });
    }, 5000);
  };

  return (
    <div className="flex flex-col fixed bg-gray-100  top-0 left-1/2 transform -translate-x-1/2 w-full h-12 items-center justify-center ">
      {/* connection */}
      {!isConnected && (
        <div className="flex flex-row items-center justify-center">
          <span className="leading-tight text-xs mx-1">
            <div
              className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </span>
          <span className="leading-tight text-xs mx-1">
            Waiting for connection
          </span>
        </div>
      )}

      {/* end connection */}
      <p className="font-bold">{data}</p>
    </div>
  );
};

export default TopBar;
