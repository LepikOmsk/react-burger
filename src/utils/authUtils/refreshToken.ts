import { saveTokens } from "./saveTokens";
import { AUTH_TOKEN } from "../constants";
import { customFetch, IRequestCreator } from "../customFetch";

export interface IRefreshTokensResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}

export const refreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken) {
    const request: IRequestCreator = {
      method: "POST",
      body: { token: refreshToken },
    };

    await customFetch<IRefreshTokensResponse>(AUTH_TOKEN, request)
      .then((res) => {
        saveTokens(res.accessToken, res.refreshToken);

        return res;
      })
      .catch(() => {
        console.log("refresh token error");
      });
  }
};
