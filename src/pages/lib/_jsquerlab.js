// lib/users.js
export async function getLogin({ username, password }) {
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

export async function getQrEmployee() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/kevinxcode/JSON-Example/main/ocean/qr-employee.json",
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

export async function getProfileEmployee() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/kevinxcode/JSON-Example/main/ocean/employee-profile.json",
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
