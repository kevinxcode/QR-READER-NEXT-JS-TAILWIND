import React, { useEffect, useState } from "react";
import { getQrEmployee } from "../lib/_jsquerlab";
import SpinnerSub from "../components/SpinnerSub";
import {
  setAsyncStorageData,
  getAsyncStorageData,
  removeAsyncStorageData,
} from "../utils/AsyncStorage";
import {
  showSweetAlert,
  showLoadingSweetAlert,
  closeLoadingSweetAlert,
} from "../utils/SweetAlert";

const myQr = () => {
  const [isQR, setisQR] = useState("");
  const [isNik, setisNik] = useState("");
  const [isName, setisName] = useState("");
  const [isJab, setisJab] = useState("");
  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    getProfileQR();
  }, []);

  const getProfileQR = async () => {
    const retrievedData = await getAsyncStorageData("login-user");
    const obj = JSON.parse(retrievedData);
    let gidValue: string = obj.details[0]._gid;
    getQrEmployee({ gidValue }).then((data) => {
      setisLoaded(true);
      if (
        data != null &&
        data.loginCodes != "error" &&
        data.details.qr_code.qr != "undefined"
      ) {
        setisQR(data.details.qr_code.qr);
        setisNik(data.details.qr_code.data[0]._nik);
        setisName(data.details.qr_code.data[0]._name);
        setisJab(data.details.qr_code.data[0]._jab);
      } else {
        if (data != null) {
          showSweetAlert(data.details, "error");
        } else {
          showSweetAlert("Server Error", "error");
        }
      }
    });
  };

  return (
    <div className="w-full max-w-full px-3 mt-3 border-2">
      {!isLoaded && <SpinnerSub />}
      <div className=" flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
          <img src={isQR} className="object-contain hover:object-scale-down" />
        </div>
        <div className="flex-auto p-4 pt-0 text-center">
          <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"></hr>
          <h5 className="mb-0 font-bold">
            {isNik} - {isName}
          </h5>
          <span className="leading-tight text-xs">{isJab}</span>
        </div>
      </div>
    </div>
  );
};
export default myQr;
