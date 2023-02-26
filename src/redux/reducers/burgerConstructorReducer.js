import {
  REMOVE_INGREDIENT,
  REORDER_INGREDIENTS,
  SET_BUN,
  SET_INGREDIENT,
  SET_TOTAL_PRICE,
} from "../actionTypes/burgerConstructorActions";

const initialState = {
  bun: null,
  ingredients: [],
  totalPrice: 0,
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUN:
      return { ...state, bun: action.bun };

    case SET_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (item) => item.uuid !== action.id
        ),
      };
    case REORDER_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
      };

    case SET_TOTAL_PRICE: {
      const bunPrice = state.bun ? state.bun.price * 2 : 0;
      const ingredientsPrice = state.ingredients.reduce(
        (sum, x) => sum + x.price,
        0
      );
      return {
        ...state,
        totalPrice: bunPrice + ingredientsPrice,
      };
    }

    default:
      return state;
  }
};
