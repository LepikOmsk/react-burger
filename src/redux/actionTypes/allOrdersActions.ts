import {
  closedAllOrdersWSConnection,
  errorAllOrdersWSConnection,
  getAllOrders,
  successAllOrdersWSConnection,
} from "../actionCreators/allOrdersActionCreators";

export enum allOrdersWSActionTypes {
  ALL_START = "WS_ALL_ORDERS_CONNECTION_START",
  ALL_STOP = "WS_ALL_ORDERS_CONNECTION_STOP",
  ALL_SUCCESS = "WS_ALL_ORDERS_CONNECTION_SUCCESS",
  ALL_CLOSE = "WS_ALL_ORDERS_CONNECTION_CLOSE",
  ALL_ERROR = "WS_ALL_ORDERS_CONNECTION_ERROR",
  ALL_GET_ORDERS = "WS_ALL_ORDERS_GET_ALL_ORDERS",
}

export interface IWSOrder {
  ingredients: string[];
  _id: string;
  name: string;
  number: number;
  status: "created" | "pending" | "done";
  createdAt: string;
  updatedAt: string;
}

export interface IAllOrders {
  orders: IWSOrder[];
  onworkOrders: number[];
  doneOrders: number[];
  total: number;
  totalToday: number;
}

export interface IStartAllOrdersWSConnection {
  type: allOrdersWSActionTypes.ALL_START;
  payload: string;
}
export interface IStopAllOrdersWSConnection {
  type: allOrdersWSActionTypes.ALL_STOP;
}
export interface ISuccessAllOrdersWSConnection {
  type: allOrdersWSActionTypes.ALL_SUCCESS;
  payload: Event;
}
export interface IClosedAllOrdersWSConnection {
  type: allOrdersWSActionTypes.ALL_CLOSE;
  payload: Event;
}
export interface IErrorAllOrdersWSConnection {
  type: allOrdersWSActionTypes.ALL_ERROR;
  payload: Event;
}
export interface IGetAllOrders {
  type: allOrdersWSActionTypes.ALL_GET_ORDERS;
  payload: IAllOrders;
}

export const allOrdersMWProp = {
  wsStart: allOrdersWSActionTypes.ALL_START,
  wsStop: allOrdersWSActionTypes.ALL_STOP,
  onOpen: successAllOrdersWSConnection,
  onMessage: getAllOrders,
  onError: errorAllOrdersWSConnection,
  onClose: closedAllOrdersWSConnection,
};

export type TAllOrdersWSActions =
  | IStartAllOrdersWSConnection
  | IStopAllOrdersWSConnection
  | ISuccessAllOrdersWSConnection
  | IClosedAllOrdersWSConnection
  | IErrorAllOrdersWSConnection
  | IGetAllOrders;
