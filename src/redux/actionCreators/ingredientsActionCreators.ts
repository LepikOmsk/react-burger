import { TIngredient } from "../../utils/types/ingredientType";
import {
  IngredientsStatus,
  IsetIngredientsErrorStatus,
  IsetIngredientsRequestStatus,
  IsetIngredientsSuccessStatus,
} from "../actionTypes/ingredientsActions";

export const setIngredientsRequestStatus = (): IsetIngredientsRequestStatus => {
  return {
    type: IngredientsStatus.INGREDIENTS_REQUEST,
  };
};

export const setIngredientsSuccessStatus = (
  payload: TIngredient[]
): IsetIngredientsSuccessStatus => {
  return {
    type: IngredientsStatus.INGREDIENTS_SUCCESS,
    payload,
  };
};

export const setIngredientsErrorStatus = (): IsetIngredientsErrorStatus => {
  return {
    type: IngredientsStatus.INGREDIENTS_ERROR,
  };
};
