import { AppDispatch, AppThunk } from "../store";

import { INGREDIENTS_URL } from "../../utils/constants";
import { customFetch } from "../../utils/customFetch";
import { TIngredient } from "../../utils/types/ingredientType";

import {
  setIngredientsErrorStatus,
  setIngredientsRequestStatus,
  setIngredientsSuccessStatus,
} from "../actionCreators/ingredientsActionCreators";

export enum IngredientsStatus {
  INGREDIENTS_REQUEST = "INGREDIENTS_REQUEST",
  INGREDIENTS_SUCCESS = "INGREDIENTS_SUCCESS",
  INGREDIENTS_ERROR = "INGREDIENTS_ERROR",
}

export interface IsetIngredientsRequestStatus {
  type: typeof IngredientsStatus.INGREDIENTS_REQUEST;
}
export interface IsetIngredientsErrorStatus {
  type: typeof IngredientsStatus.INGREDIENTS_ERROR;
}
export interface IsetIngredientsSuccessStatus {
  type: typeof IngredientsStatus.INGREDIENTS_SUCCESS;
  payload: TIngredient[];
}

export interface IIngredientsRespose {
  succes: boolean;
  data: TIngredient[];
}

export type TIngredientsActions =
  | IsetIngredientsRequestStatus
  | IsetIngredientsErrorStatus
  | IsetIngredientsSuccessStatus;

export const getIngredients = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(setIngredientsRequestStatus());

  customFetch<IIngredientsRespose>(INGREDIENTS_URL)
    .then((res) => {
      dispatch(setIngredientsSuccessStatus(res.data));
    })
    .catch(() => {
      dispatch(setIngredientsErrorStatus());
    });
};
