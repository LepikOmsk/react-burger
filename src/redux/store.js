import { compose, createStore } from "redux";

import { combineReducers } from "redux";
import { burgerConstructorReducer } from "./reducers/burgerConstructorReducer";
import { currentIngredientReducer } from "./reducers/currentIngredientReducer";
import { ingredientReducer } from "./reducers/ingredientsReducer";
import { orderDetailsReducer } from "./reducers/orderDetailsReducer";

const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  currentIngredient: currentIngredientReducer,
  order: orderDetailsReducer,
  burgerConstructor: burgerConstructorReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers();

export const store = createStore(rootReducer, enhancer);
