import { disableExpoCliLogging } from "expo/build/logs/Logs";

export const SIGNUP = "SIGNUP";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const res = await response.json();
    if (!res.ok) {
        throw new Error(res.error);
    }
    console.log(res);
    dispatch({ type: SIGNUP });
  };
};
