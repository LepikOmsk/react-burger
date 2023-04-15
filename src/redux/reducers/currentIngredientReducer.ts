import { TIngredient } from "../../utils/types/ingredientType";
import {
  CurrentIngredientTypes,
  TCurrentIngredientActions,
} from "../actionTypes/currentIngregredientActions";

type ICurrentIngredientState = TIngredient | null;

const initialState: ICurrentIngredientState = null;

export const currentIngredientReducer = (
  state: ICurrentIngredientState = initialState,
  action: TCurrentIngredientActions
) => {
  switch (action.type) {
    case CurrentIngredientTypes.SET_CURRENT_INGREDIENT_DETAILS:
      return action.ingredient;

    case CurrentIngredientTypes.RESET_CURRENT_INGREDIENT_DETAILS:
      return initialState;

    default:
      return state;
  }
};
