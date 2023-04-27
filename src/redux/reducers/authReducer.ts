import { AuthStatus, TAuthActions } from "../actionTypes/authActions";

export type TAuthUser = {
  name: string;
  email: string;
  isLoggedIn: boolean;
};

export type TAuthRegister = {
  name: string;
  email: string;
  password: string;
};

export type TAuthLogin = {
  email: string;
  password: string;
};

export type TAuthState = {
  user: TAuthUser;
  isLoading: boolean;
  hasError: boolean;
};

export interface IRegisterResponse {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface ILoginResponse {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface ILogoutResponse {
  success: boolean;
  message: string;
}

export interface IUserResponse {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
}

const initialState: TAuthState = {
  user: {
    name: "",
    email: "",
    isLoggedIn: false,
  },
  isLoading: true,
  hasError: false,
};

export const authReducer = (
  state = initialState,
  action: TAuthActions
): TAuthState => {
  switch (action.type) {
    case AuthStatus.REGISTER_REQUEST:
      return { ...state, isLoading: true, hasError: false };

    case AuthStatus.REGISTER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.response.user.name,
          email: action.response.user.email,
          isLoggedIn: true,
        },
        isLoading: false,
      };

    case AuthStatus.REGISTER_ERROR:
      return { ...state, isLoading: false, hasError: true };

    case AuthStatus.LOGIN_REQUEST:
      return { ...state, isLoading: true, hasError: false };

    case AuthStatus.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.response.user.name,
          email: action.response.user.email,
          isLoggedIn: true,
        },
        isLoading: false,
      };

    case AuthStatus.LOGIN_ERROR:
      return { ...state, isLoading: false, hasError: true };

    case AuthStatus.LOGOUT_REQUEST:
      return { ...state, isLoading: true, hasError: false };

    case AuthStatus.LOGOUT_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
      };

    case AuthStatus.LOGOUT_ERROR:
      return { ...state, isLoading: false, hasError: true };

    case AuthStatus.GET_USER_REQUEST:
      return { ...state, isLoading: true, hasError: false };

    case AuthStatus.GET_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.response.user.name,
          email: action.response.user.email,
          isLoggedIn: true,
        },
        isLoading: false,
      };

    case AuthStatus.GET_USER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      };

    case AuthStatus.SET_USER_REQUEST:
      return { ...state, isLoading: true, hasError: false };

    case AuthStatus.SET_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.response.user.name,
          email: action.response.user.email,
        },
        isLoading: false,
      };

    case AuthStatus.SET_USER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      };

    default:
      return state;
  }
};
