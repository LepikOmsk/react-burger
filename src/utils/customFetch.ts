import { checkResponse } from "./checkResponse";

export type TMethod = "GET" | "POST" | "PATCH";
export type THeaders = { [name: string]: string };
export type TBody = { [name: string]: string | Array<string> };

export interface IRequestCreator {
  method?: TMethod;
  headers?: THeaders;
  body?: TBody;
}

const requestCreator = ({ method = "GET", headers, body }: IRequestCreator) => {
  return {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    ...(body && { body: JSON.stringify(body) }),
  };
};

export const customFetch = <T>(url: string, options?: IRequestCreator) => {
  const requestOptions = requestCreator(options || {});

  return fetch(url, requestOptions)
    .then((res) => checkResponse<T>(res))
    .catch((error) => Promise.reject(error));
};
