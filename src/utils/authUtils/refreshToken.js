import { saveTokens } from "./saveTokens";
import { AUTH_TOKEN } from "../constants";
import { checkReponse } from "../checkResponse";

export const refreshToken = async () => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  };

  await fetch(AUTH_TOKEN, request)
    .then((res) => checkReponse(res))
    .then((res) => {
      saveTokens(res.accessToken, res.refreshToken);

      return res;
    })
    .catch((err) => {
      console.log("refresh token error");
    });
};
