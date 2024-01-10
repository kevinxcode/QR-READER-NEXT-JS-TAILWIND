export async function getLogin({ usernameValue, passwordValue }) {
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
