import { combineReducers } from "redux";
import { currentIngredientReducer } from "./currentIngredientReducer";
import { ingredientReducer } from "./ingredientsReducer";

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  currentIngredient: currentIngredientReducer,
});
