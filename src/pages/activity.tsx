// pages/index.js
import React from "react";
import FloatingButton from "./components/FloatingButton";
import TopBar from "./components/TopBar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[90vh]">
      <TopBar data={"SCAN"} />
      <FloatingButton />
      <div class="flex mx-4 items-center justify-center mt-14">
        <div class="p-8 rounded-3xl bg-white max-w-sm min-h-[65vh] w-full">
          <div aria-label="header" class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 shrink-0"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
            </svg>
            <div class="space-y-0.5 flex-1">
              <h3 class="font-medium text-lg tracking-tight text-gray-900 leading-tight">
                Activity
              </h3>
            </div>
            <a class="inline-flex items-center shrink-0 justify-center w-8 h-8 rounded-full text-white bg-gray-900 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17 7l-10 10"></path>
                <path d="M8 7l9 0l0 9"></path>
              </svg>
            </a>
          </div>
          <div aria-label="content" class="mt-9 grid gap-2.5">
            <a href="qr-reader">
              <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </span>
                <div class="flex flex-col flex-1">
                  <h3 class="text-sm font-medium">OCEAN 2.0</h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
