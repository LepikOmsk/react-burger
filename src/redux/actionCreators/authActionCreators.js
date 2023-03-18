import {
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SET_USER_ERROR,
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
} from "../actionTypes/authActions";

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerError = () => {
  return {
    type: REGISTER_ERROR,
  };
};

export const registerSuccess = (response) => {
  return {
    type: REGISTER_SUCCESS,
    response,
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginError = () => {
  return {
    type: LOGIN_ERROR,
  };
};

export const loginSuccess = (response) => {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logoutError = () => {
  return {
    type: LOGOUT_ERROR,
  };
};

export const logoutSuccess = (response) => {
  return {
    type: LOGOUT_SUCCESS,
    response,
  };
};

export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const getUserError = () => {
  return {
    type: GET_USER_ERROR,
  };
};

export const getUserSuccess = (response) => {
  return {
    type: GET_USER_SUCCESS,
    response,
  };
};

export const setUserRequest = () => {
  return {
    type: SET_USER_REQUEST,
  };
};

export const setUserError = () => {
  return {
    type: SET_USER_ERROR,
  };
};

export const setUserSuccess = (response) => {
  return {
    type: SET_USER_SUCCESS,
    response,
  };
};
