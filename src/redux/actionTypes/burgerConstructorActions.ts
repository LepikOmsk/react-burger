import { TIngredient } from "../../utils/types/ingredientType";

export enum BurgerConstructorTypes {
  SET_BUN = "SET_BUN",
  SET_INGREDIENT = "SET_INGREDIENT",
  REMOVE_INGREDIENT = "REMOVE_INGREDIENT",
  REORDER_INGREDIENTS = "REORDER_INGREDIENTS",
  SET_TOTAL_PRICE = "SET_TOTAL_PRICE",
}

export interface ISetBun {
  type: typeof BurgerConstructorTypes.SET_BUN;
  bun: TIngredient;
}
export interface ISetIngredient {
  type: typeof BurgerConstructorTypes.SET_INGREDIENT;
  ingredient: TIngredient;
}
export interface IRemoveIngredient {
  type: typeof BurgerConstructorTypes.REMOVE_INGREDIENT;
  id: string;
}
export interface IReorderIngredients {
  type: typeof BurgerConstructorTypes.REORDER_INGREDIENTS;
  ingredients: TIngredient[];
}

export type TBurgerConstructorActions =
  | ISetBun
  | ISetIngredient
  | IRemoveIngredient
  | IReorderIngredients;
