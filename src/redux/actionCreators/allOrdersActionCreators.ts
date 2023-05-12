import {
  allOrdersWSActionTypes,
  IAllOrders,
  IClosedAllOrdersWSConnection,
  IErrorAllOrdersWSConnection,
  IGetAllOrders,
  IStartAllOrdersWSConnection,
  IStopAllOrdersWSConnection,
  ISuccessAllOrdersWSConnection,
} from "../actionTypes/allOrdersActions";

export const startAllOrdersWSConnection = (
  url: string
): IStartAllOrdersWSConnection => ({
  type: allOrdersWSActionTypes.ALL_START,
  payload: url,
});

export const stopAllOrdersWSConnection = (): IStopAllOrdersWSConnection => ({
  type: allOrdersWSActionTypes.ALL_STOP,
});

export const successAllOrdersWSConnection = (
  event: Event
): ISuccessAllOrdersWSConnection => ({
  type: allOrdersWSActionTypes.ALL_SUCCESS,
  payload: event,
});

export const closedAllOrdersWSConnection = (
  event: Event
): IClosedAllOrdersWSConnection => ({
  type: allOrdersWSActionTypes.ALL_CLOSE,
  payload: event,
});

export const errorAllOrdersWSConnection = (
  event: Event
): IErrorAllOrdersWSConnection => ({
  type: allOrdersWSActionTypes.ALL_ERROR,
  payload: event,
});

export const getAllOrders = (event: MessageEvent): IGetAllOrders => {
  const data: IAllOrders = JSON.parse(event.data as string) as IAllOrders;

  const doneOrders = data.orders
    .filter((el) => el.status === "done")
    .map((el) => el.number);

  const onworkOrders = data.orders
    .filter((el) => el.status === "pending")
    .map((el) => el.number);

  return {
    type: allOrdersWSActionTypes.ALL_GET_ORDERS,
    payload: {
      orders: data.orders,
      total: data.total,
      totalToday: data.totalToday,
      doneOrders,
      onworkOrders,
    },
  };
};
