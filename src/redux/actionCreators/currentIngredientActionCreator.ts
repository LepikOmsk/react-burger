import { TIngredient } from "./../../utils/types/ingredientType";
import {
  CurrentIngredientTypes,
  IResetIngredientDetails,
  ISetIngredientDetails,
} from "../actionTypes/currentIngregredientActions";

export const setIngredientDetails = (
  ingredient: TIngredient
): ISetIngredientDetails => {
  return {
    type: CurrentIngredientTypes.SET_CURRENT_INGREDIENT_DETAILS,
    ingredient,
  };
};

export const resetIngredientDetails = (): IResetIngredientDetails => {
  return {
    type: CurrentIngredientTypes.RESET_CURRENT_INGREDIENT_DETAILS,
  };
};
