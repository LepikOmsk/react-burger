import {
  ILoginResponse,
  ILogoutResponse,
  IRegisterResponse,
  IUserResponse,
} from "../reducers/authReducer";
import {
  AuthStatus,
  IRegisterError,
  IRegisterRequest,
  IRegisterSuccess,
  ILoginRequest,
  ILoginError,
  ILoginSuccess,
  ILogoutRequest,
  ILogoutError,
  ILogoutSuccess,
  IGetUserRequest,
  IGetUserError,
  IgetUserSuccess,
  ISetUserRequest,
  ISetUserError,
  ISetUserSuccess,
} from "./../actionTypes/authActions";

export const registerRequest = (): IRegisterRequest => {
  return {
    type: AuthStatus.REGISTER_REQUEST,
  };
};

export const registerError = (): IRegisterError => {
  return {
    type: AuthStatus.REGISTER_ERROR,
  };
};

export const registerSuccess = (
  response: IRegisterResponse
): IRegisterSuccess => {
  return {
    type: AuthStatus.REGISTER_SUCCESS,
    response,
  };
};

export const loginRequest = (): ILoginRequest => {
  return {
    type: AuthStatus.LOGIN_REQUEST,
  };
};

export const loginError = (): ILoginError => {
  return {
    type: AuthStatus.LOGIN_ERROR,
  };
};

export const loginSuccess = (response: ILoginResponse): ILoginSuccess => {
  return {
    type: AuthStatus.LOGIN_SUCCESS,
    response,
  };
};

export const logoutRequest = (): ILogoutRequest => {
  return {
    type: AuthStatus.LOGOUT_REQUEST,
  };
};

export const logoutError = (): ILogoutError => {
  return {
    type: AuthStatus.LOGOUT_ERROR,
  };
};

export const logoutSuccess = (response: ILogoutResponse): ILogoutSuccess => {
  return {
    type: AuthStatus.LOGOUT_SUCCESS,
    response,
  };
};

export const getUserRequest = (): IGetUserRequest => {
  return {
    type: AuthStatus.GET_USER_REQUEST,
  };
};

export const getUserError = (): IGetUserError => {
  return {
    type: AuthStatus.GET_USER_ERROR,
  };
};

export const getUserSuccess = (response: IUserResponse): IgetUserSuccess => {
  return {
    type: AuthStatus.GET_USER_SUCCESS,
    response,
  };
};

export const setUserRequest = (): ISetUserRequest => {
  return {
    type: AuthStatus.SET_USER_REQUEST,
  };
};

export const setUserError = (): ISetUserError => {
  return {
    type: AuthStatus.SET_USER_ERROR,
  };
};

export const setUserSuccess = (response: IUserResponse): ISetUserSuccess => {
  return {
    type: AuthStatus.SET_USER_SUCCESS,
    response,
  };
};
