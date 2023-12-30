import React, { useState } from "react";

import FloatingButton from "../components/FloatingButton";
// import { QrReader } from "react-qr-reader";
import QrReader from "modern-react-qr-reader";

export default function Myqr() {
  const [data, setData] = useState("No result");
  const [camera, setCamera] = useState("environment");
  const handleScan = (data) => {
    if (data) {
      setData(data);
      // this.state.result = data;
      // console.log(this.state.result);
      // this.setState({ result: data });
    }
  };

  
  const handleChange = (e) => {
    setCamera(e.target.value);
  };

  return (
    <div className="flex flex-col h-90vh">
      <FloatingButton />
      <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-20 text-center ">
        <div
          className="flex-grow flex items-center justify-center"
          style={{ width: "100%" }}
        >

          <div className="container mx-auto px-4 py-12">
            <select value={camera} onChange={handleChange} class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="environment">Back Camera</option>
              <option value="user">Front Camera</option>
            </select>
            <QrReader
              delay={300}
              facingMode={camera}
              onError={console.log("aa")}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
            <p style={{ marginTop: "15px" }}>{data}</p>
          </div>
        </div>
      </main>

    </div>
  );
}
