// pages/index.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
     
      <FloatingButton />
      <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-20 text-center my-20">
        <div className="flex-grow flex items-center justify-center">
          <div className="container mx-auto px-4 py-8">
            {/* Your dashboard content goes here */}
            <h1 className="text-3xl font-semibold mb-4">
              Welcome to the Dashboard
            </h1>
            <p className="text-gray-700">
              This is your admin dashboard. You can add more content and
              components here.
            </p>
          </div>
        </div>
      </main>
     
    </div>
  );
};

export default Home;
