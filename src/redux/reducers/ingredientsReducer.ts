import { TIngredient } from "../../utils/types/ingredientType";
import {
  IngredientsStatus,
  TIngredientsActions,
} from "../actionTypes/ingredientsActions";

export interface IIngredientsState {
  data: TIngredient[] | null;
  isLoading: boolean;
  hasError: boolean;
}

const initialState: IIngredientsState = {
  data: null,
  isLoading: true,
  hasError: false,
};

export const ingredientReducer = (
  state: IIngredientsState = initialState,
  action: TIngredientsActions
): IIngredientsState => {
  switch (action.type) {
    case IngredientsStatus.INGREDIENTS_REQUEST:
      return { ...initialState, isLoading: true, hasError: false };

    case IngredientsStatus.INGREDIENTS_SUCCESS:
      return { ...initialState, isLoading: false, data: action.payload };

    case IngredientsStatus.INGREDIENTS_ERROR:
      return { ...initialState, isLoading: false, hasError: true };

    default:
      return state;
  }
};
