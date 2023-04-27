import { AppDispatch, AppThunk } from "../store";

//Utils
import { deleteCookie, getCookie } from "../../utils/authUtils/cookie";

import { saveTokens } from "../../utils/authUtils/saveTokens";
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REGISTER,
  AUTH_USER,
} from "../../utils/constants";
import {
  customFetch,
  IRequestCreator,
} from "../../utils/authUtils/customFetch";

import {
  getUserError,
  getUserRequest,
  getUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
  setUserError,
  setUserRequest,
  setUserSuccess,
} from "../actionCreators/authActionCreators";

import {
  ILoginResponse,
  ILogoutResponse,
  IRegisterResponse,
  IUserResponse,
  TAuthLogin,
  TAuthRegister,
} from "../reducers/authReducer";
import { fetchWithRefresh } from "../../utils/authUtils/fetchWIthRefresh";

export enum AuthStatus {
  REGISTER_REQUEST = "REGISTER_REQUEST",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_ERROR = "REGISTER_ERROR",

  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",

  LOGOUT_REQUEST = "LOGOUT_REQUEST",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  LOGOUT_ERROR = "LOGOUT_ERROR",

  GET_USER_REQUEST = "GET_USER_REQUEST",
  GET_USER_SUCCESS = "GET_USER_SUCCESS",
  GET_USER_ERROR = "GET_USER_ERROR",

  SET_USER_REQUEST = "SET_USER_REQUEST",
  SET_USER_SUCCESS = "SET_USER_SUCCESS",
  SET_USER_ERROR = "SET_USER_ERROR",
}

export interface IRegisterRequest {
  type: typeof AuthStatus.REGISTER_REQUEST;
}

export interface IRegisterError {
  type: typeof AuthStatus.REGISTER_ERROR;
}

export interface IRegisterSuccess {
  type: typeof AuthStatus.REGISTER_SUCCESS;
  response: IRegisterResponse;
}

export interface ILoginRequest {
  type: typeof AuthStatus.LOGIN_REQUEST;
}

export interface ILoginError {
  type: typeof AuthStatus.LOGIN_ERROR;
}

export interface ILoginSuccess {
  type: typeof AuthStatus.LOGIN_SUCCESS;
  response: ILoginResponse;
}

export interface ILogoutRequest {
  type: typeof AuthStatus.LOGOUT_REQUEST;
}

export interface ILogoutError {
  type: typeof AuthStatus.LOGOUT_ERROR;
}

export interface ILogoutSuccess {
  type: typeof AuthStatus.LOGOUT_SUCCESS;
  response: ILogoutResponse;
}

export interface IGetUserRequest {
  type: typeof AuthStatus.GET_USER_REQUEST;
}

export interface IGetUserError {
  type: typeof AuthStatus.GET_USER_ERROR;
}

export interface IgetUserSuccess {
  type: typeof AuthStatus.GET_USER_SUCCESS;
  response: IUserResponse;
}

export interface ISetUserRequest {
  type: typeof AuthStatus.SET_USER_REQUEST;
}

export interface ISetUserError {
  type: typeof AuthStatus.SET_USER_ERROR;
}

export interface ISetUserSuccess {
  type: typeof AuthStatus.SET_USER_SUCCESS;
  response: IUserResponse;
}

export type TAuthActions =
  | IRegisterRequest
  | IRegisterError
  | IRegisterSuccess
  | ILoginRequest
  | ILoginError
  | ILoginSuccess
  | ILogoutRequest
  | ILogoutError
  | ILogoutSuccess
  | IGetUserRequest
  | IGetUserError
  | IgetUserSuccess
  | ISetUserRequest
  | ISetUserError
  | ISetUserSuccess;

export const userRegister =
  ({ name, email, password }: TAuthRegister): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(registerRequest());

    const request: IRequestCreator = {
      method: "POST",
      body: { name, email, password },
    };

    customFetch<IRegisterResponse>(AUTH_REGISTER, request)
      .then((res) => {
        saveTokens(res.accessToken, res.refreshToken);

        dispatch(registerSuccess(res));
      })
      .catch(() => dispatch(registerError()));
  };

export const userLogin =
  ({ email, password }: TAuthLogin): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(loginRequest());

    const request: IRequestCreator = {
      method: "POST",
      body: { email, password },
    };

    customFetch<ILoginResponse>(AUTH_LOGIN, request)
      .then((res) => {
        saveTokens(res.accessToken, res.refreshToken);

        dispatch(loginSuccess(res));
      })
      .catch((err) => {
        dispatch(loginError());
      });
  };

export const userLogout = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(logoutRequest());

  const refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken) {
    const request: IRequestCreator = {
      method: "POST",
      body: { token: refreshToken },
    };

    customFetch<ILogoutResponse>(AUTH_LOGOUT, request)
      .then((res) => {
        deleteCookie("accessToken");
        localStorage.removeItem("refreshToken");

        dispatch(logoutSuccess(res));
      })
      .catch(() => {
        dispatch(logoutError());
      });
  }
};

export const getUser = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getUserRequest());

  const request: IRequestCreator = {
    method: "GET",
    headers: {
      Authorization: "Bearer ".concat(getCookie("accessToken") || ""),
    },
  };

  fetchWithRefresh<IUserResponse>(AUTH_USER, request)
    .then((res) => dispatch(getUserSuccess(res)))
    .catch(() => dispatch(getUserError()));
};

export const setUser =
  ({ name, email, password }: TAuthRegister): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setUserRequest());

    const request: IRequestCreator = {
      method: "PATCH",
      headers: {
        Authorization: "Bearer ".concat(getCookie("accessToken") || ""),
      },
      body: { name, email, password },
    };

    fetchWithRefresh<IUserResponse>(AUTH_USER, request)
      .then((res) => dispatch(setUserSuccess(res)))
      .catch(() => dispatch(setUserError()));
  };
