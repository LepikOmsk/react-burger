import { IErrorResponse } from "../types/fetchType";
import { customFetch, IRequestCreator } from "./customFetch";
import { refreshTokens } from "./refreshToken";

export const fetchWithRefresh = async <T>(
  url: string,
  options: IRequestCreator
) => {
  try {
    return await customFetch<T>(url, options);
  } catch (err) {
    const error = err as IErrorResponse;

    if (error.message === "jwt expired") {
      const freshData = await refreshTokens();

      if (freshData) {
        const freshOptions = {
          ...options,
          headers: {
            ...options.headers,
            Authorization: freshData.accessToken,
          },
        };

        return await customFetch<T>(url, freshOptions);
      }
    }

    return Promise.reject(error);
  }
};
