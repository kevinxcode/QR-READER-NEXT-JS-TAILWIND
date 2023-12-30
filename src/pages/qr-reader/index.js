import React, { useState } from "react";

import FloatingButton from "../components/FloatingButton";
// import { QrReader } from "react-qr-reader";
import QrReader from "modern-react-qr-reader";

export default function Myqr() {
  const [data, setData] = useState("No result");
  const handleScan = (data) => {
    if (data) {
      setData(data);
      // this.state.result = data;
      // console.log(this.state.result);
      // this.setState({ result: data });
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <FloatingButton />
      <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-20 text-center ">
        <div
          className="flex-grow flex items-center justify-center"
          style={{ width: "100%" }}
        >
          <div className="container mx-auto px-4 py-8">
            <QrReader
              delay={300}
              facingMode={"environment"}
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
