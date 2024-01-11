import { uidGet } from "../utils/DeviceUUID";

export async function getLogin({ usernameValue, passwordValue }) {
  const uidData = await Promise.all([uidGet()]);
  const obj = JSON.parse(uidData[0]);
  try {
    const res = await window.fetch(
      "https://hrd.citratubindo.com/sys-hr/sys-login",
      {
        method: "POST",
        headers: {
          Authorization: "HrdApp23!",
          "User-Agent": "hrd_app_login",
          "content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          username: usernameValue,
          password: passwordValue,
          device_uid: obj.uuid,
          device_browser: obj.browser,
        }),
      },
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
  // .then((response) => response.json())
  // .then((responseJson) => {
  //   console.log(responseJson);
  // });
}

export async function getConnectionIndicator() {
  try {
    const res = await window.fetch(
      "https://hrd.citratubindo.com/sys-hr/app/api",
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
  // .then((response) => response.json())
  // .then((responseJson) => {
  //   console.log(responseJson);
  // });
}

export async function getQrEmployee({ gidValue }) {
  try {
    const res = await window.fetch(
      "https://hrd.citratubindo.com/sys-hr/api-qr-employee",
      {
        method: "POST",
        headers: {
          Authorization: "QrEmployee321!",
          Auth_username: "qr_employee",
          "content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          post_data: gidValue,
        }),
      },
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function getProfileEmployee({ gidValue }) {
  try {
    const res = await window.fetch(
      "https://hrd.citratubindo.com/sys-hr/api-employee-profile",
      {
        method: "POST",
        headers: {
          Authorization: "ProfileEmp23!",
          Auth_username: "employee-profile",
          "content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          post_data: gidValue,
        }),
      },
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
}
