import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FloatingButton from "../components/FloatingButton";
import TopBar from "../components/TopBar";
import {
  setAsyncStorageData,
  getAsyncStorageData,
  removeAsyncStorageData,
} from "../utils/AsyncStorage";
import { Session } from "../utils/Session";
import Spinner from "../components/Spinner";
import OceanList from "../ocean/oceanList";
const Ocean = () => {
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
        <TopBar data={"OCEAN"} />
        <FloatingButton />
        <div className="container mx-auto px-5 py-8 mt-10  max-w-lg bg-white min-h-screen">
          {/* page content  */}
          <div className="px-8">
            <span className="cursor-pointer  items-center justify-center ">
              <div className="flex items-center justify-center space-x-4 p-3.5 rounded-full bg-gray-600 text-white">
                <h3 className="text-sm font-medium">OCEAN SCAN</h3>
              </div>
            </span>
          </div>
          <OceanList />
          {/* end page content */}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};
export default Ocean;
