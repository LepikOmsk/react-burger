import {
  ORDER_DETAILS_ERROR,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../actionTypes/orderDetailsActions";

const initialState = {
  orderData: {
    name: "Название бургера",
    id: "###",
  },
  isLoading: false,
  hasError: false,
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, isLoading: true, hasError: false };

    case ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orderData: {
          name: action.name,
          id: action.id,
        },
      };

    case ORDER_DETAILS_ERROR:
      return { ...state, isLoading: false, hasError: true };

    default:
      return state;
  }
};
