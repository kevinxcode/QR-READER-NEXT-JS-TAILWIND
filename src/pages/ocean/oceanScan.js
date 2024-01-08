import React, { Component, useEffect } from "react";
import { useRouter } from "next/router";
import TopBar from "../components/TopBar";
import QrReader from "modern-react-qr-reader";
import {
  showSweetAlert,
  showLoadingSweetAlert,
  closeLoadingSweetAlert,
} from "../utils/SweetAlert";
import { Session } from "../utils/Session";

class OceanScan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "No result",
      camera: "environment",
    };

    this.handleError = this.handleError.bind(this);
    this.handleScan = this.handleScan.bind(this);
    console.log("aa");
  }

  handleScan = (data) => {
    try {
      if (data) {
        this.state.result = data;
        console.log(this.state.result);
        this.setState({ result: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleError = (err) => {
    showSweetAlert("Error Reading QR", "error");
    console.error(err);
  };

  frontCam = () => {
    try {
      this.setState({ camera: "user" });
    } catch (error) {
      console.log(error);
    }
  };
  backCam = () => {
    try {
      this.setState({ camera: "environment" });
    } catch (error) {
      console.log(error);
    }
  };

  btnCancel = () => {
    try {
      showLoadingSweetAlert();
      setTimeout(() => {
        window.location.href = "/ocean";
      }, 200);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="flex flex-col min-h-[90vh] bg-white">
        <TopBar data={"QR Scan"} />

        <div className="flex flex-nowrap fixed bg-gray-100  bottom-0 left-1/2 transform -translate-x-1/2 w-full h-20 items-center justify-center ">
          <a
            onClick={this.btnCancel}
            className="py-2.5 px-5 me-2 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          >
            Cancel
          </a>
        </div>

        <div className="container mx-auto px-2 py-8 mt-10  max-w-lg bg-white min-h-screen">
          <div className="flex flex-row items-center justify-center">
            <button
              onClick={this.backCam}
              className="m-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <span>Back</span>
            </button>
            <button
              onClick={this.frontCam}
              className="m-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <span>Front</span>
            </button>
          </div>
          <QrReader
            videoWidth={300}
            delay={300}
            facingMode={this.state.camera}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%" }}
          />
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default OceanScan;
