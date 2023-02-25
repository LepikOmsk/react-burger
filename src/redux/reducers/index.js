import { combineReducers } from "redux";
import { currentIngredientReducer } from "./currentIngredientReducer";
import { ingredientReducer } from "./ingredientsReducer";
import { orderDetailsReducer } from "./orderDetailsReducer";

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  currentIngredient: currentIngredientReducer,
  order: orderDetailsReducer,
});
