// pages/index.js
import React from "react";
import FloatingButton from "./components/FloatingButton";
import TopBar from "./components/TopBar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[90vh]">
      <TopBar data={"HOME"} />
      <FloatingButton />
    </div>
  );
};

export default Home;
