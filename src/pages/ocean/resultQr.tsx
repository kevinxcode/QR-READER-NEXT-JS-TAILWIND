import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TopBar from "../components/TopBar";

const resultQr = () => {
  const router = useRouter();
  const btnBackOcean = () => {
    router.push("/ocean");
  };

  return (
    <div className="flex flex-col min-h-[90vh] bg-white">
      <TopBar data={"Ocean Result"} />
      <div className="flex flex-nowrap fixed bg-gray-100  bottom-0 left-1/2 transform -translate-x-1/2 w-full h-20 items-center justify-center ">
        <button
          onClick={btnBackOcean}
          className="py-2.5 px-5 me-2 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          Back
        </button>
      </div>
      <div className="flex flex-col min-h-[60vh] items-center justify-center w-full">
        <span className="text-md font-bold">KEVIN ALNIZAR</span>
        <span className="text-md font-semibold mt-2">08 Jan 2024 08:00</span>
        <span className="text-md font-semibold">P-12345</span>
      </div>
    </div>
  );
};

export default resultQr;
