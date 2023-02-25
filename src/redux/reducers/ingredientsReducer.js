import {
  INGREDIENTS_ERROR,
  INGREDIENTS_REQEST,
  INGREDIENTS_SUCCESS,
} from "../actionTypes/ingredientsActions";

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_REQEST:
      return { ...state, isLoading: true, hasError: false };

    case INGREDIENTS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };

    case INGREDIENTS_ERROR:
      return { ...state, isLoading: false, hasError: true };

    default:
      return state;
  }
};
