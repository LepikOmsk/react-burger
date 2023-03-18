import { setCookie } from "./cookie";

export const saveTokens = (accessToken, refreshToken) => {
  setCookie("token", accessToken.split("Bearer ")[1]);
  localStorage.setItem("refreshToken", refreshToken);
};
