import {
  INGREDIENTS_ERROR,
  INGREDIENTS_REQUEST,
  INGREDIENTS_SUCCESS,
} from "../actionTypes/ingredientsActions";

export const setIngredientsRequestStatus = () => {
  return {
    type: INGREDIENTS_REQUEST,
  };
};

export const setIngredientsSuccessStatus = (payload) => {
  return {
    type: INGREDIENTS_SUCCESS,
    payload,
  };
};

export const setIngredientsErrorStatus = () => {
  return {
    type: INGREDIENTS_ERROR,
  };
};
