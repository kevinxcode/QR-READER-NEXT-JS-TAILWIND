// pages/index.js
import React from "react";
import FloatingButton from "./components/FloatingButton";
import TopBar from "./components/TopBar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[90vh]">
      <TopBar data={"HOME"} />
      <FloatingButton />
      <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-20 text-center my-20">
        <div className="flex-grow flex items-center justify-center">
          <div className="container mx-auto px-4 py-8">
            {/* Your dashboard content goes here */}
            <h1 className="text-3xl font-semibold mb-0 ">
              OCEAN
              <span className="leading-tight text-xs"> 2.0</span>
            </h1>
            <p className="text-gray-700">
              The new generation of Ocean System (2.0)
            </p>
            {/* end content */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
