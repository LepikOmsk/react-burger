import { TRootState } from "../store";

export const ingredientsSelector = (store: TRootState) => store.ingredients;
export const ingredientsDataSelector = (store: TRootState) =>
  store.ingredients.data;
