import { TIngredient } from "../../utils/types/ingredientType";

export enum CurrentIngredientTypes {
  SET_CURRENT_INGREDIENT_DETAILS = "SET_CURRENT_INGREDIENT_DETAILS",
  RESET_CURRENT_INGREDIENT_DETAILS = "RESET_CURRENT_INGREDIENT_DETAILS",
}

export interface ISetIngredientDetails {
  type: typeof CurrentIngredientTypes.SET_CURRENT_INGREDIENT_DETAILS;
  ingredient: TIngredient;
}
export interface IResetIngredientDetails {
  type: typeof CurrentIngredientTypes.RESET_CURRENT_INGREDIENT_DETAILS;
}

export type TCurrentIngredientActions =
  | ISetIngredientDetails
  | IResetIngredientDetails;
