import {
  setAsyncStorageData,
  getAsyncStorageData,
  removeAsyncStorageData,
} from "../utils/AsyncStorage";
const uidGet = async () => {
  try {
    const DeviceUUID = await import("device-uuid");

    // const deviceIdInstance = new DeviceUUID.DeviceUUID().get();
    const deviceIdInstance = new DeviceUUID.DeviceUUID();
    const device = deviceIdInstance.parse();
    //
    const uuid = deviceIdInstance.get(); // uid
    const browser = device.browser; // browser
    const isMobile = device.isMobile; // is mobile
    const isDesktop = device.isDesktop; // is mobile
    // Print the results
    // console.log(`Device UUID: ${uuid}`);
    // console.log(`Browser: ${browser}`);
    // console.log(`Is mobile: ${isMobile}`);
    // console.log(`Is Desktop: ${isDesktop}`);

    var raw =
      '{"uuid":"' +
      uuid +
      '","browser":"' +
      browser +
      '","isMobile":' +
      isMobile +
      ',"isDesktop":' +
      isDesktop +
      "}";

    // var raw =
    //   '{"uuid":"' +
    //   uuid +
    //   '","browser":"' +
    //   browser +
    //   '","isMobile":' +
    //   true +
    //   ',"isDesktop":' +
    //   isDesktop +
    //   "}";

    // console.log(raw);

    setAsyncStorageData("device-id", raw);
    return raw;
  } catch (error) {
    return null;
  }
};

export { uidGet };
