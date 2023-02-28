import { checkReponse } from "../../utils/checkResponse";
import { INGREDIENTS_URL } from "../../utils/constants";
import {
  setIngredientsErrorStatus,
  setIngredientsRequestStatus,
  setIngredientsSuccessStatus,
} from "../actionCreators/ingredientsActionCreators";

export const INGREDIENTS_REQUEST = "INGREDIENTS_REQUEST";
export const INGREDIENTS_SUCCESS = "INGREDIENTS_SUCCESS";
export const INGREDIENTS_ERROR = "INGREDIENTS_ERROR";

export const getIngredients = () => (dispatch) => {
  dispatch(setIngredientsRequestStatus());

  fetch(INGREDIENTS_URL)
    .then((res) => checkReponse(res))
    .then((res) => {
      dispatch(setIngredientsSuccessStatus(res.data));
    })
    .catch((error) => {
      dispatch(setIngredientsErrorStatus());
    });
};
