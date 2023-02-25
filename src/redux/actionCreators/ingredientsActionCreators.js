import {
  INGREDIENTS_ERROR,
  INGREDIENTS_REQEST,
  INGREDIENTS_SUCCESS,
} from "../actionTypes/ingredientsActions";

export const setIngredientsReqestStatus = () => {
  return {
    type: INGREDIENTS_REQEST,
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
