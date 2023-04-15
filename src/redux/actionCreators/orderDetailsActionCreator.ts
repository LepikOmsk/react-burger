import {
  ISetErrorOrderStatus,
  ISetRequestOrderStatus,
  ISetSuccessOrderStatus,
  OrderDetailsStatus,
  TOrderResponse,
} from "../actionTypes/orderDetailsActions";

export const setOrderRequestStatus = (): ISetRequestOrderStatus => {
  return {
    type: OrderDetailsStatus.ORDER_DETAILS_REQUEST,
  };
};

export const setOrderSuccessStatus = (
  res: TOrderResponse
): ISetSuccessOrderStatus => {
  return {
    type: OrderDetailsStatus.ORDER_DETAILS_SUCCESS,
    name: res.name,
    orderId: res.order.number,
  };
};

export const setOrderErrorStatus = (): ISetErrorOrderStatus => {
  return {
    type: OrderDetailsStatus.ORDER_DETAILS_ERROR,
  };
};
