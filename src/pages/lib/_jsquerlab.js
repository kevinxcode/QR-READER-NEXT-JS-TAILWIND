export async function getLogin({ username, password }) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "BoP2023!");
  myHeaders.append("User-Agent", "bop.citratubindo.com");
  myHeaders.append("Content-Type", "text/plain");

  var raw = '{"username":"kevin.alnizar","password":"Kijang=13"}';

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://hrd.citratubindo.com/sys-hr/sys-login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export async function getLogin2({ username, password }) {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/kevinxcode/JSON-Example/main/ocean/login.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
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
