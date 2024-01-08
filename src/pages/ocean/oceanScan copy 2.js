import React, { Component } from "react";
import dynamic from "next/dynamic";
import TopBar from "../components/TopBar";
const QrReader = dynamic(() => import("modern-react-qr-reader"), {
  ssr: false,
});

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "No result",
      scanned: false,
      camData: "environment",
    };

    this.handleError = this.handleError.bind(this);
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan = (data) => {
    if (data) {
      this.state.result = data;
      console.log(this.state.result);
      this.setState({ result: data });
      this.setState({ scanned: true });
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  frontCam = () => {
    this.setState({ camData: "user" });
  };
  backCam = () => {
    this.setState({ camData: "environment" });
  };

  btnBackOcean = () => {
    window.location.href = "/ocean";
  };

  render() {
    return (
      <div className="flex flex-col min-h-[90vh] bg-white">
        <TopBar data={"Ocean Scan"} />
        <div className="flex flex-nowrap fixed bg-gray-100  bottom-0 left-1/2 transform -translate-x-1/2 w-full h-20 items-center justify-center ">
          <button
            onClick={this.btnBackOcean}
            className="py-2.5 px-5 me-2 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          >
            Back
          </button>
        </div>
        <div className="container mx-auto px-2 py-8 mt-10  max-w-lg bg-white min-h-screen">
          {this.state.scanned ? (
            <div>
              <p>{this.state.result}</p>
            </div>
          ) : (
            <div>
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
                delay={300}
                facingMode={this.state.camData}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: "100%" }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Test;
