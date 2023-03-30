import { applyMiddleware, compose, createStore } from "redux";
import { TypedUseSelectorHook, useSelector as selectorHook } from "react-redux";

import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { burgerConstructorReducer } from "./reducers/burgerConstructorReducer";
import { currentIngredientReducer } from "./reducers/currentIngredientReducer";
import { ingredientReducer } from "./reducers/ingredientsReducer";
import { orderDetailsReducer } from "./reducers/orderDetailsReducer";

const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  currentIngredient: currentIngredientReducer,
  order: orderDetailsReducer,
  burgerConstructor: burgerConstructorReducer,
  auth: authReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type TRootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook;
