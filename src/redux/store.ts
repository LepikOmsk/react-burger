import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";

import { applyMiddleware, compose, createStore } from "redux";
import { combineReducers } from "redux";

import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from "react-redux";

//Actions
import { TBurgerConstructorActions } from "./actionTypes/burgerConstructorActions";
import { TOrderActions } from "./actionTypes/orderDetailsActions";
import { TAuthActions } from "./actionTypes/authActions";
import { TCurrentIngredientActions } from "./actionTypes/currentIngregredientActions";
import { TIngredientsActions } from "./actionTypes/ingredientsActions";
import {
  allOrdersMWProp,
  TAllOrdersWSActions,
} from "./actionTypes/allOrdersActions";
import {
  TUserOrdersWSActions,
  userOrdersMWProp,
} from "./actionTypes/userOrdersActions";

//Reducers
import { orderDetailsReducer } from "./reducers/orderDetailsReducer";
import { ingredientReducer } from "./reducers/ingredientsReducer";
import { currentIngredientReducer } from "./reducers/currentIngredientReducer";
import { burgerConstructorReducer } from "./reducers/burgerConstructorReducer";
import { authReducer } from "./reducers/authReducer";
import { allOrdersReducer } from "./reducers/allOrdersReducer";
import { userOrdersReducer } from "./reducers/userOrdersReducer";
import { WSMiddleware } from "./middleware/WSMiddleware";

const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  currentIngredient: currentIngredientReducer,
  order: orderDetailsReducer,
  burgerConstructor: burgerConstructorReducer,
  auth: authReducer,
  allOrders: allOrdersReducer,
  userOrders: userOrdersReducer,
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
  composeWithDevTools(
    applyMiddleware(
      thunk,
      WSMiddleware(allOrdersMWProp),
      WSMiddleware(userOrdersMWProp)
    )
  )
);

export type TAppActions =
  | TAuthActions
  | TBurgerConstructorActions
  | TCurrentIngredientActions
  | TIngredientsActions
  | TOrderActions
  | TAllOrdersWSActions
  | TUserOrdersWSActions;

export type TRootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<TRootState, never, TAppActions>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  never,
  TAppActions
>;

export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook;
