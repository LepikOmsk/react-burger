import {
  RESET_CURRENT_INGREDIENT_DETAILS,
  SET_CURRENT_INGREDIENT_DETAILS,
} from "../actionTypes/currentIngregredientActions";

export const setIngredientDetails = (details) => {
  return {
    type: SET_CURRENT_INGREDIENT_DETAILS,
    details,
  };
};

export const resetIngredientDetails = () => {
  return {
    type: RESET_CURRENT_INGREDIENT_DETAILS,
  };
};
