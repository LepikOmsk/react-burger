import { IAllOrders } from "../actionTypes/allOrdersActions";
import {
  IClosedUserOrdersWSConnection,
  IErrorUserOrdersWSConnection,
  IGetUserOrders,
  IStartUserOrdersWSConnection,
  IStopUserOrdersWSConnection,
  ISuccessUserOrdersWSConnection,
  userOrdersWSActionTypes,
} from "../actionTypes/userOrdersActions";

export const startUserOrdersWSConnection = (
  url: string
): IStartUserOrdersWSConnection => ({
  type: userOrdersWSActionTypes.USER_START,
  payload: url,
});

export const stopUserOrdersWSConnection = (): IStopUserOrdersWSConnection => ({
  type: userOrdersWSActionTypes.USER_STOP,
});

export const successUserOrdersWSConnection = (
  event: Event
): ISuccessUserOrdersWSConnection => ({
  type: userOrdersWSActionTypes.USER_SUCCESS,
  payload: event,
});

export const closedUserOrdersWSConnection = (
  event: Event
): IClosedUserOrdersWSConnection => ({
  type: userOrdersWSActionTypes.USER_CLOSED,
  payload: event,
});

export const errorUserOrdersWSConnection = (
  event: Event
): IErrorUserOrdersWSConnection => ({
  type: userOrdersWSActionTypes.USER_ERROR,
  payload: event,
});

export const getUserOrders = (event: MessageEvent): IGetUserOrders => {
  const data: IAllOrders = JSON.parse(event.data as string) as IAllOrders;

  const doneOrders = data.orders
    .filter((el) => el.status === "done")
    .map((el) => el.number);

  const onworkOrders = data.orders
    .filter((el) => el.status === "created")
    .map((el) => el.number);

  return {
    type: userOrdersWSActionTypes.USER_GET_ORDERS,
    payload: {
      orders: data.orders,
      total: data.total,
      totalToday: data.totalToday,
      doneOrders,
      onworkOrders,
    },
  };
};
