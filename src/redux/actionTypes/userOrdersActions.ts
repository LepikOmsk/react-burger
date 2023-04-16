import {
  closedUserOrdersWSConnection,
  errorUserOrdersWSConnection,
  getUserOrders,
  successUserOrdersWSConnection,
} from "../actionCreators/userOrdersActionCreators";

import { IAllOrders } from "./allOrdersActions";

export enum userOrdersWSActionTypes {
  USER_START = "WS_USER_ORDERS_CONNECTION_START",
  USER_STOP = "WS_USER_ORDERS_CONNECTION_STOP",
  USER_SUCCESS = "WS_USER_ORDERS_CONNECTION_SUCCESS",
  USER_CLOSED = "WS_USER_ORDERS_CONNECTION_CLOSED",
  USER_ERROR = "WS_USER_ORDERS_CONNECTION_ERROR",
  USER_GET_ORDERS = "WS_USER_ORDERS_GET_ALL_ORDERS",
}

export interface IStartUserOrdersWSConnection {
  type: userOrdersWSActionTypes.USER_START;
  payload: string;
}
export interface IStopUserOrdersWSConnection {
  type: userOrdersWSActionTypes.USER_STOP;
}
export interface ISuccessUserOrdersWSConnection {
  type: userOrdersWSActionTypes.USER_SUCCESS;
  payload: Event;
}
export interface IClosedUserOrdersWSConnection {
  type: userOrdersWSActionTypes.USER_CLOSED;
  payload: Event;
}
export interface IErrorUserOrdersWSConnection {
  type: userOrdersWSActionTypes.USER_ERROR;
  payload: Event;
}
export interface IGetUserOrders {
  type: userOrdersWSActionTypes.USER_GET_ORDERS;
  payload: IAllOrders;
}

export const userOrdersMWProp = {
  wsStart: userOrdersWSActionTypes.USER_START,
  wsStop: userOrdersWSActionTypes.USER_STOP,
  onOpen: successUserOrdersWSConnection,
  onMessage: getUserOrders,
  onError: errorUserOrdersWSConnection,
  onClose: closedUserOrdersWSConnection,
};

export type TUserOrdersWSActions =
  | IStartUserOrdersWSConnection
  | IStopUserOrdersWSConnection
  | ISuccessUserOrdersWSConnection
  | IClosedUserOrdersWSConnection
  | IErrorUserOrdersWSConnection
  | IGetUserOrders;
