import { AppDispatch, AppThunk } from "../store";

import { getCookie } from "../../utils/authUtils/cookie";
import { ORDER_URL } from "../../utils/constants";
import { customFetch, IRequestCreator } from "../../utils/customFetch";
import {
  setOrderErrorStatus,
  setOrderRequestStatus,
  setOrderSuccessStatus,
} from "../actionCreators/orderDetailsActionCreator";

export enum OrderDetailsStatus {
  ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST",
  ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS",
  ORDER_DETAILS_ERROR = "ORDER_DETAILS_ERROR",
}

export interface ISetRequestOrderStatus {
  type: typeof OrderDetailsStatus.ORDER_DETAILS_REQUEST;
}
export interface ISetErrorOrderStatus {
  type: typeof OrderDetailsStatus.ORDER_DETAILS_ERROR;
}
export interface ISetSuccessOrderStatus {
  type: typeof OrderDetailsStatus.ORDER_DETAILS_SUCCESS;
  name: string;
  orderId: number;
}

export interface TOrderResponse {
  name: string;
  order: { number: number };
}

export type TOrderActions =
  | ISetRequestOrderStatus
  | ISetErrorOrderStatus
  | ISetSuccessOrderStatus;

export const setOrder =
  (ingredients: string[]): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setOrderRequestStatus());

    const request: IRequestCreator = {
      method: "POST",
      headers: {
        Authorization: "Bearer ".concat(getCookie("accessToken") || ""),
      },
      body: { ingredients },
    };

    customFetch<TOrderResponse>(ORDER_URL, request)
      .then((res) => dispatch(setOrderSuccessStatus(res)))
      .catch(() => dispatch(setOrderErrorStatus()));
  };
