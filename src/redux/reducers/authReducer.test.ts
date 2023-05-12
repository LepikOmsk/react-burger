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
import { TAuthActions } from "../actionTypes/authActions";
import {
  authReducer,
  ILoginResponse,
  ILogoutResponse,
  IRegisterResponse,
  IUserResponse,
  TAuthState,
} from "./authReducer";

describe("Auth Reducer Tests", function () {
  const initialState: TAuthState = {
    user: null,
    isLoading: true,
    hasError: false,
  };

  const errorState: TAuthState = {
    ...initialState,
    isLoading: false,
    hasError: true,
  };

  const testUser = { name: "testUser", email: "testEmail" };

  const stateWithUser: TAuthState = {
    ...initialState,
    user: testUser,
    isLoading: false,
  };

  const logoutState: TAuthState = {
    ...initialState,
    isLoading: false,
  };

  it("should return Initial State", function () {
    expect(authReducer(undefined, {} as TAuthActions)).toEqual(initialState);
  });

  it("should handle REGISTER_REQUEST", function () {
    expect(authReducer(initialState, registerRequest())).toEqual(initialState);
  });

  it("should handle REGISTER_ERROR", function () {
    expect(authReducer(initialState, registerError())).toEqual(errorState);
  });

  it("should handle REGISTER_SUCCESS", function () {
    expect(
      authReducer(
        initialState,
        registerSuccess({ user: testUser } as IRegisterResponse)
      )
    ).toEqual(stateWithUser);
  });

  it("should handle LOGIN_REQUEST", function () {
    expect(authReducer(initialState, loginRequest())).toEqual(initialState);
  });

  it("should handle LOGIN_ERROR", function () {
    expect(authReducer(initialState, loginError())).toEqual(errorState);
  });

  it("should handle LOGIN_SUCCESS", function () {
    expect(
      authReducer(
        initialState,
        loginSuccess({ user: testUser } as ILoginResponse)
      )
    ).toEqual(stateWithUser);
  });

  it("should handle LOGOUT_REQUEST", function () {
    expect(authReducer(initialState, logoutRequest())).toEqual(initialState);
  });

  it("should handle LOGOUT_ERROR", function () {
    expect(authReducer(initialState, logoutError())).toEqual(errorState);
  });

  it("should handle LOGOUT_SUCCESS", function () {
    expect(
      authReducer(stateWithUser, logoutSuccess({} as ILogoutResponse))
    ).toEqual(logoutState);
  });

  it("should handle GET_USER_REQUEST", function () {
    expect(authReducer(initialState, getUserRequest())).toEqual(initialState);
  });

  it("should handle GET_USER_ERROR", function () {
    expect(authReducer(initialState, getUserError())).toEqual(errorState);
  });

  it("should handle GET_USER_SUCCESS", function () {
    expect(
      authReducer(
        initialState,
        getUserSuccess({ user: testUser } as IUserResponse)
      )
    ).toEqual(stateWithUser);
  });

  it("should handle SET_USER_REQUEST", function () {
    expect(authReducer(initialState, setUserRequest())).toEqual(initialState);
  });

  it("should handle SET_USER_ERROR", function () {
    expect(authReducer(initialState, setUserError())).toEqual(errorState);
  });

  it("should handle SET_USER_SUCCESS", function () {
    expect(
      authReducer(
        { ...initialState },
        setUserSuccess({ user: testUser } as IUserResponse)
      )
    ).toEqual(stateWithUser);
  });
});
