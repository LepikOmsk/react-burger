import {
  RESET_CURRENT_INGREDIENT_DETAILS,
  SET_CURRENT_INGREDIENT_DETAILS,
} from "../actionTypes/currentIngregredientActions";

const initialState = {
  image: "",
  title: "",
  calories: 0,
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
};

export const currentIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT_DETAILS:
      return { ...action.details };

    case RESET_CURRENT_INGREDIENT_DETAILS:
      return initialState;

    default:
      return state;
  }
};
