import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import TopBar from "../components/TopBar";

const QrReader = dynamic(() => import("modern-react-qr-reader"), {
  ssr: false,
});

import { Session } from "../utils/Session";
import {
  showSweetAlert,
  showLoadingSweetAlert,
  closeLoadingSweetAlert,
} from "../utils/SweetAlert";
import Spinner from "../components/Spinner";

const oceanScan = () => {
  const [data, setData] = useState("No result");
  const [camera, setCamera] = useState("environment");
  const [isScanned, setisScanned] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const sessData = await Session();
      if (sessData == 0) {
        window.location.href = "/login";
      }
    };
    return () => {
      setTimeout(() => {
        checkSession();
      }, 400);
    };
  }, []);

  const handleScan = (data) => {
    if (data) {
      setisScanned(true);
      let timer = setTimeout(() => {
        setData(data);
        showSweetAlert("Scan Success", "success");
        setisSubmit(true);
      }, 800);

      // this.state.result = data;
      // console.log(this.state.result);
      // this.setState({ result: data });
    }
  };

  const frontCam = () => {
    setCamera("user");
  };
  const backCam = () => {
    setCamera("environment");
  };

  const btnBackOcean = () => {
    window.location.href = "/ocean";
  };

  return (
    <div className="flex flex-col min-h-[90vh] bg-white">
      <TopBar data={"Ocean Scan"} />
      <div className="flex flex-nowrap fixed bg-gray-100  bottom-0 left-1/2 transform -translate-x-1/2 w-full h-20 items-center justify-center ">
        <button
          onClick={btnBackOcean}
          className="py-2.5 px-5 me-2 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          Back
        </button>
      </div>
      <div className="container mx-auto px-2 py-8 mt-10  max-w-lg bg-white min-h-screen">
        {isScanned ? (
          <div>
            {isSubmit ? (
              <div className="flex flex-col min-h-[60vh] items-center justify-center w-full">
                <span className="text-md font-bold">KEVIN ALNIZAR</span>
                <span className="text-md font-semibold mt-2">
                  08 Jan 2024 08:00
                </span>
                <span className="text-md font-semibold">P-12345</span>
              </div>
            ) : (
              <Spinner />
            )}
          </div>
        ) : (
          <div>
            <div className="flex flex-row items-center justify-center">
              <button
                onClick={backCam}
                className="m-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <span>Back</span>
              </button>
              <button
                onClick={frontCam}
                className="m-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <span>Front</span>
              </button>
            </div>

            <QrReader
              videoWidth={300}
              resolution={600}
              showViewFinder
              delay={300}
              facingMode={camera}
              onError={(error) => {
                setisScanned(false);
                console.error(error);
              }}
              onScan={handleScan}
              className="w-full"
              style={{ videoWidth: "100%" }}
            />
            {/* <p style={{ marginTop: "15px" }}>{data}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default oceanScan;
