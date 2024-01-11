// pages/index.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FloatingButton from "../components/FloatingButton";
import TopBar from "../components/TopBar";
import { Session } from "../utils/Session";
import Spinner from "../components/Spinner";
import WorkspaceList from "../workspace/workspaceList";

const Workspace = () => {
  const router = useRouter();
  const [isPage, setisPage] = useState(false);
  useEffect(() => {
    const checkSession = async () => {
      const sessData = await Session();
      if (sessData == 0) {
        router.push("/login");
      } else {
        setisPage(true);
      }
    };
    return () => {
      setTimeout(() => {
        checkSession();
      }, 400);
    };
  }, []);
  if (isPage) {
    return (
      <div className="flex flex-col min-h-[90vh]">
        <TopBar data={"Event"} />
        <FloatingButton />
        <div className="flex bg-white items-center justify-center mt-12">
          <div className="p-8  bg-white max-w-lg min-h-screen w-full">
            <div aria-label="header" className="flex items-center space-x-2">
              <div className="space-y-0.5 flex-1">
                <h3 className="font-medium text-lg tracking-tight text-gray-900 leading-tight">
                  Activity List
                </h3>
              </div>

              <a className="inline-flex items-center shrink-0 justify-center w-8 h-8 rounded text-white bg-gray-900 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </a>
            </div>
            <div aria-label="content" className="mt-9 grid gap-2.5">
              <WorkspaceList />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default Workspace;
