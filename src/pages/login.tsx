import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  setAsyncStorageData,
  getAsyncStorageData,
  removeAsyncStorageData,
} from "./utils/AsyncStorage";

import {
  showSweetAlert,
  showLoadingSweetAlert,
  closeLoadingSweetAlert,
} from "./utils/SweetAlert";
import { Session } from "./utils/Session";
import Spinner from "./components/Spinner";

const Login = () => {
  var now = new Date(); // create a new Date object
  var year = now.getFullYear(); // get the full year (four digits)
  const router = useRouter();

  const [isPage, setisPage] = useState(false);
  useEffect(() => {
    const checkSession = async () => {
      const sessData = await Session();
      if (sessData == 1) {
        router.push("/home");
      }
      setisPage(true);
    };
    return () => {
      checkSession();
    };
  }, []);

  const LOGIN = async () => {
    showLoadingSweetAlert();
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/kevinxcode/JSON-Example/main/ocean/login.json",
      );
      const jsonData = await response.json();
      setAsyncStorageData("login-user", JSON.stringify(jsonData));
      showSweetAlert("Sigin Success", "success");
      setTimeout(() => {
        router.push("/home");
      }, 800); // Simulated 3-second loading time
    } catch (error) {
      showSweetAlert("Username or Password invalid", "error");
      // console.error('Error fetching data:', error);
    }
  };

  if (isPage) {
    return (
      <div className="flex flex-col min-h-[100vh]">
        <div className="flex-grow flex items-center justify-center px-3 bg-white">
          <div className="container  mx-auto px-2 py-8  max-w-md bg-white">
            <div className="w-full bg-white">
              <div className="text-center mb-4">
                <h1 className="text-3xl font-semibold mb-0 ">
                  OCEAN
                  <span className="leading-tight text-xs"> 2.0</span>
                </h1>
                <span className="leading-tight text-xs">Vallourec SEA</span>
              </div>
              <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username / Employee ID
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Username"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center mt-8 ">
                  <button
                    onClick={LOGIN}
                    className="bg-gray-800 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    SIGN IN
                  </button>
                </div>
                <div className="flex items-center mt-5 justify-center ">
                  <span className="leading-tight text-xs">
                    © {year} SEA - HR
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};
export default Login;
