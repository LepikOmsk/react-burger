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

const initialState = {
  user: {
    name: "",
    email: "",
    isLoggedIn: false,
  },
  isLoading: false,
  hasError: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, isLoading: true, hasError: false };

    case REGISTER_SUCCESS:
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

    case REGISTER_ERROR:
      return { ...state, isLoading: false, hasError: true };

    case LOGIN_REQUEST:
      return { ...state, isLoading: true, hasError: false };

    case LOGIN_SUCCESS:
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

    case LOGIN_ERROR:
      return { ...state, isLoading: false, hasError: true };

    case LOGOUT_REQUEST:
      return { ...state, isLoading: true, hasError: false };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        ...initialState,
      };

    case LOGOUT_ERROR:
      return { ...state, isLoading: false, hasError: true };

    case GET_USER_REQUEST:
      return { ...state, isLoading: true, hasError: false };

    case GET_USER_SUCCESS:
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

    case GET_USER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      };

    case SET_USER_REQUEST:
      return { ...state, isLoading: true, hasError: false };

    case SET_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.response.user.name,
          email: action.response.user.email,
        },
        isLoading: false,
      };

    case SET_USER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      };

    default:
      return { ...state };
  }
};
