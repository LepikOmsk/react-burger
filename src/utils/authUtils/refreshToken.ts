import { AUTH_TOKEN } from "../constants";
import { customFetch, IRequestCreator } from "./customFetch";
import { saveTokens } from "./saveTokens";

export interface IRefreshTokensResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}

export const refreshTokens = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken) {
    const request: IRequestCreator = {
      method: "POST",
      body: { token: refreshToken },
    };

    try {
      const fetchResponse = await customFetch<IRefreshTokensResponse>(
        AUTH_TOKEN,
        request
      );

      saveTokens(fetchResponse.accessToken, fetchResponse.refreshToken);

      return fetchResponse;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return Promise.reject("There is no refreshToken in LocalStorage");
};
