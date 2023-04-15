import {
  OrderDetailsStatus,
  TOrderActions,
} from "../actionTypes/orderDetailsActions";

export interface IOrderDetailsState {
  orderData: {
    name: string;
    order: number;
  } | null;
  isLoading: boolean;
  hasError: boolean;
}

const initialState: IOrderDetailsState = {
  orderData: null,
  isLoading: false,
  hasError: false,
};

export const orderDetailsReducer = (
  state: IOrderDetailsState = initialState,
  action: TOrderActions
): IOrderDetailsState => {
  switch (action.type) {
    case OrderDetailsStatus.ORDER_DETAILS_REQUEST: {
      return {
        ...initialState,
        isLoading: true,
      };
    }
    case OrderDetailsStatus.ORDER_DETAILS_SUCCESS: {
      return {
        ...initialState,
        orderData: {
          name: action.name,
          order: action.orderId,
        },
      };
    }

    case OrderDetailsStatus.ORDER_DETAILS_ERROR: {
      return {
        ...initialState,
        hasError: true,
      };
    }

    default:
      return state;
  }
};
