import {
  ORDER_DETAILS_ERROR,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../actionTypes/orderDetailsActions";

export const setOrderRequestStatus = () => {
  return {
    type: ORDER_DETAILS_REQUEST,
  };
};

export const setOrderSuccessStatus = (res) => {
  return {
    type: ORDER_DETAILS_SUCCESS,
    name: res.name,
    id: res.order.number,
  };
};

export const setOrderErrorStatus = () => {
  return {
    type: ORDER_DETAILS_ERROR,
  };
};
