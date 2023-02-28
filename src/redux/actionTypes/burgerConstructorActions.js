import { checkReponse } from "../../utils/checkResponse";
import { ORDER_URL } from "../../utils/constants";
import {
  setOrderErrorStatus,
  setOrderRequestStatus,
  setOrderSuccessStatus,
} from "../actionCreators/orderDetailsActionCreator";

export const SET_BUN = "SET_BUN";
export const SET_INGREDIENT = "SET_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const REORDER_INGREDIENTS = "REORDER_INGREDIENTS";
export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";

export const setOrder = (ingredients) => (dispatch) => {
  dispatch(setOrderRequestStatus());

  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients,
    }),
  };

  fetch(ORDER_URL, request)
    .then((res) => checkReponse(res))
    .then((res) => dispatch(setOrderSuccessStatus(res)))
    .catch((error) => dispatch(setOrderErrorStatus()));
};
