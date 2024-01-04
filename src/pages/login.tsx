import React from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const home = () => {
    router.push("/home");
  };
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="flex-grow flex items-center justify-center px-3 bg-white">
        <div className="container  mx-auto px-2 py-8  max-w-md bg-white">
          <div className="w-full bg-white">
            <div className="text-center">
              <h1 className="text-3xl font-semibold mb-4 ">OCEAN 2.0</h1>
            </div>
            <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
              <div class="mb-4">
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
                  onClick={home}
                  className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
