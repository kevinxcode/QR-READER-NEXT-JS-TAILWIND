import React from "react";
import { useRouter } from "next/router";
import FloatingButton from "../components/FloatingButton";
import TopBar from "../components/TopBar";
import MyQrPage from "../profile/myQr";

const Profile = () => {
  const router = useRouter();
  const signOut = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col min-h-[90vh]">
      <TopBar data={"PROFILE"} />
      <FloatingButton />
      <div className="flex items-center justify-space-between mt-12 justify-center bg-gray-800 text-white ">
        <button className="text-white py-4 px-6 block hover:text-white-500 focus:outline-none text-white border-b-2 font-medium border-white-500">
          My QR
        </button>
        <button className="text-white py-4 px-6 block hover:text-blue-500 focus:outline-none">
          My Profile
        </button>
        <button
          onClick={signOut}
          className="text-red-400 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        >
          Sign Out
        </button>
      </div>
      <div className="container  mx-auto px-5 py-8  max-w-lg bg-white min-h-screen">
        <MyQrPage />
      </div>
    </div>
  );
};
export default Profile;
