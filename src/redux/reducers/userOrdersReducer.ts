import { IWSOrder } from "../actionTypes/allOrdersActions";
import {
  TUserOrdersWSActions,
  userOrdersWSActionTypes,
} from "../actionTypes/userOrdersActions";

interface IUOInitialState {
  wsConnected: boolean;
  orders: IWSOrder[];
  total: number;
  totalToday: number;
  error?: Event | undefined;
}

const initialState: IUOInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const userOrdersReducer = (
  state = initialState,
  action: TUserOrdersWSActions
): IUOInitialState => {
  switch (action.type) {
    case userOrdersWSActionTypes.USER_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        error: undefined,
      };

    case userOrdersWSActionTypes.USER_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case userOrdersWSActionTypes.USER_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case userOrdersWSActionTypes.USER_GET_ORDERS:
      return {
        ...state,
        error: undefined,
        ...action.payload,
      };
    default:
      return state;
  }
};
