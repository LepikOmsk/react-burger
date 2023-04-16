import { TIngredient } from "../../utils/types/ingredientType";
import {
  BurgerConstructorTypes,
  TBurgerConstructorActions,
} from "../actionTypes/burgerConstructorActions";

export interface IBurgerConstructorState {
  bun: TIngredient | null;
  ingredients: TIngredient[] | null;
}

const initialState: IBurgerConstructorState = {
  bun: null,
  ingredients: null,
};

export const burgerConstructorReducer = (
  state: IBurgerConstructorState = initialState,
  action: TBurgerConstructorActions
): IBurgerConstructorState => {
  switch (action.type) {
    case BurgerConstructorTypes.SET_BUN:
      return { ...state, bun: action.bun };

    case BurgerConstructorTypes.SET_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients
          ? [...state.ingredients, action.ingredient]
          : [action.ingredient],
      };

    case BurgerConstructorTypes.REMOVE_INGREDIENT: {
      if (state.ingredients) {
        const ingredients = [...state.ingredients].filter(
          (item) => item.uuid !== action.id
        );

        if (ingredients.length !== 0) {
          return { ...state, ingredients };
        }
      }

      return {
        ...state,
        ingredients: null,
      };
    }

    case BurgerConstructorTypes.REORDER_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
      };

    default:
      return state;
  }
};
