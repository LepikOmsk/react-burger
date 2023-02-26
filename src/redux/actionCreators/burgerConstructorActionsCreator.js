import {
  REMOVE_INGREDIENT,
  REORDER_INGREDIENTS,
  SET_BUN,
  SET_INGREDIENT,
  SET_TOTAL_PRICE,
} from "../actionTypes/burgerConstructorActions";

export const setBun = (bun) => {
  return {
    type: SET_BUN,
    bun,
  };
};

export const setIngredient = (ingredient) => {
  return {
    type: SET_INGREDIENT,
    ingredient,
  };
};

export const removeIngredient = (id) => {
  return {
    type: REMOVE_INGREDIENT,
    id,
  };
};

export const reorderIngredient = (ingredients) => {
  return {
    type: REORDER_INGREDIENTS,
    ingredients,
  };
};

export const setTotalPrice = () => {
  return {
    type: SET_TOTAL_PRICE,
  };
};
