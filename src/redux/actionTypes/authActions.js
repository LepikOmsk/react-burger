import { deleteCookie, getCookie } from "../../utils/authUtils/cookie";
import { refreshToken } from "../../utils/authUtils/refreshToken";
import { saveTokens } from "../../utils/authUtils/saveTokens";
import { checkReponse } from "../../utils/checkResponse";
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REGISTER,
  AUTH_USER,
} from "../../utils/constants";

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

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_ERROR = "SET_USER_ERROR";

export const userRegister =
  ({ name, email, password }) =>
  (dispatch) => {
    dispatch(registerRequest());

    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    };

    fetch(AUTH_REGISTER, request)
      .then((res) => checkReponse(res))
      .then((res) => {
        saveTokens(res.accessToken, res.refreshToken);

        dispatch(registerSuccess(res));
      })
      .catch((err) => dispatch(registerError()));
  };

export const userLogin =
  ({ email, password }) =>
  (dispatch) => {
    dispatch(loginRequest());

    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    fetch(AUTH_LOGIN, request)
      .then((res) => checkReponse(res))
      .then((res) => {
        saveTokens(res.accessToken, res.refreshToken);

        dispatch(loginSuccess(res));
      })
      .catch((err) => {
        dispatch(loginError());
      });
  };

export const userLogout = () => (dispatch) => {
  dispatch(logoutRequest());

  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  };

  fetch(AUTH_LOGOUT, request)
    .then((res) => checkReponse(res))
    .then((res) => {
      deleteCookie("token");
      localStorage.removeItem("refreshToken");

      dispatch(logoutSuccess(res));
    })
    .catch((err) => {
      dispatch(logoutError());
    });
};

export const getUser = () => (dispatch) => {
  dispatch(getUserRequest());

  const request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ".concat(getCookie("token") || ""),
    },
  };

  fetch(AUTH_USER, request)
    .then((res) => checkReponse(res))
    .then((res) => dispatch(getUserSuccess(res)))
    .catch((err) => {
      if (err.message === "jwt expired") {
        refreshToken().then(() => dispatch(getUser()));
      } else {
        dispatch(getUserError());
      }
    });
};

export const setUser =
  ({ name, email, password }) =>
  (dispatch) => {
    dispatch(setUserRequest());

    const request = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(getCookie("token") || ""),
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    };

    fetch(AUTH_USER, request)
      .then((res) => checkReponse(res))
      .then((res) => dispatch(setUserSuccess(res)))
      .catch((err) => {
        if (err.message === "jwt expired") {
          refreshToken().then(() =>
            dispatch(setUser({ name, email, password }))
          );
        } else {
          dispatch(setUserError());
        }
      });
  };
