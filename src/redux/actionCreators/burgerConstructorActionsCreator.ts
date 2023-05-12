import { TIngredient } from "./../../utils/types/ingredientType";

import {
  BurgerConstructorTypes,
  IRemoveIngredient,
  IReorderIngredients,
  ISetBun,
  ISetIngredient,
} from "../actionTypes/burgerConstructorActions";

export const setBun = (bun: TIngredient): ISetBun => {
  return {
    type: BurgerConstructorTypes.SET_BUN,
    bun,
  };
};

export const setIngredient = (ingredient: TIngredient): ISetIngredient => {
  return {
    type: BurgerConstructorTypes.SET_INGREDIENT,
    ingredient,
  };
};

export const removeIngredient = (id: string): IRemoveIngredient => {
  return {
    type: BurgerConstructorTypes.REMOVE_INGREDIENT,
    id,
  };
};

export const reorderIngredients = (
  ingredients: TIngredient[]
): IReorderIngredients => {
  return {
    type: BurgerConstructorTypes.REORDER_INGREDIENTS,
    ingredients,
  };
};
