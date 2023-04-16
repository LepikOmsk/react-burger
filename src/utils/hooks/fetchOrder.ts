import { useState, useEffect } from "react";

// Redux
import { IWSOrder } from "../../redux/actionTypes/allOrdersActions";

// Utils
import { customFetch } from "../customFetch";
import { ORDER_URL } from "./../constants";

interface IOrderFetch {
  success: boolean;
  orders: IWSOrder[];
}

interface IOrderState {
  isLoading: boolean;
  hasError: boolean;
  order: IWSOrder | null;
}

const initialState: IOrderState = {
  isLoading: true,
  hasError: false,
  order: null,
};

export const useFetchOrder = (id: string) => {
  const [{ order, isLoading, hasError }, setOrder] =
    useState<IOrderState>(initialState);

  useEffect(() => {
    customFetch<IOrderFetch>(`${ORDER_URL}/${id}`).then((res) => {
      if (res.success) {
        setOrder((prev) => ({
          ...prev,
          isLoading: false,
          order: res.orders[0],
        }));
      } else {
        setOrder({ isLoading: false, hasError: true, order: null });
      }
    });
  }, [id]);

  return { order, isLoading, hasError };
};
