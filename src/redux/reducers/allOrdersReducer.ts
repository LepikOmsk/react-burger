import {
  allOrdersWSActionTypes,
  IWSOrder,
  TAllOrdersWSActions,
} from "../actionTypes/allOrdersActions";

interface IAOInitialState {
  wsConnected: boolean;
  orders: IWSOrder[];
  onworkOrders: number[];
  doneOrders: number[];
  total: number;
  totalToday: number;
  error?: Event | undefined;
}

const initialState: IAOInitialState = {
  wsConnected: false,
  orders: [],
  onworkOrders: [],
  doneOrders: [],
  total: 0,
  totalToday: 0,
};

export const allOrdersReducer = (
  state = initialState,
  action: TAllOrdersWSActions
): IAOInitialState => {
  switch (action.type) {
    case allOrdersWSActionTypes.ALL_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        error: undefined,
      };

    case allOrdersWSActionTypes.ALL_CLOSE:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case allOrdersWSActionTypes.ALL_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case allOrdersWSActionTypes.ALL_GET_ORDERS:
      return {
        ...state,
        error: undefined,
        ...action.payload,
      };
    default:
      return state;
  }
};
