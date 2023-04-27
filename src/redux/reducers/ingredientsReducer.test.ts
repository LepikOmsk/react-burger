import {
  setIngredientsErrorStatus,
  setIngredientsRequestStatus,
  setIngredientsSuccessStatus,
} from "../actionCreators/ingredientsActionCreators";
import { TIngredientsActions } from "../actionTypes/ingredientsActions";
import { TIngredient } from "./../../utils/types/ingredientType";
import { IIngredientsState, ingredientReducer } from "./ingredientsReducer";

function ingredientCreator(type: "bun" | "sauce" | "main") {
  return {
    _id: "1",
    name: "name",
    type: type,
    proteins: 42,
    fat: 13,
    carbohydrates: 69,
    calories: 228,
    price: 1337,
    image: "image link",
    image_mobile: "image link",
    image_large: "image link",
  } as TIngredient;
}

describe("Ingredients reducer tests", () => {
  const initialState: IIngredientsState = {
    data: null,
    isLoading: false,
    hasError: false,
  };

  const requestState: IIngredientsState = {
    ...initialState,
    isLoading: true,
  };

  const data: TIngredient[] = [
    ingredientCreator("bun"),
    ingredientCreator("main"),
    ingredientCreator("sauce"),
  ];

  const successState: IIngredientsState = {
    ...initialState,
    data,
  };

  const errorState: IIngredientsState = {
    ...initialState,
    hasError: true,
  };

  it("should return the initial state", () => {
    expect(ingredientReducer(initialState, {} as TIngredientsActions)).toEqual(
      initialState
    );
    expect(ingredientReducer(requestState, {} as TIngredientsActions)).toEqual(
      requestState
    );
    expect(ingredientReducer(successState, {} as TIngredientsActions)).toEqual(
      successState
    );
    expect(ingredientReducer(errorState, {} as TIngredientsActions)).toEqual(
      errorState
    );
  });

  it("should handle INGREDIENTS_REQUEST", () => {
    expect(
      ingredientReducer(initialState, setIngredientsRequestStatus())
    ).toEqual(requestState);
    expect(
      ingredientReducer(requestState, setIngredientsRequestStatus())
    ).toEqual(requestState);
    expect(
      ingredientReducer(successState, setIngredientsRequestStatus())
    ).toEqual(requestState);
    expect(
      ingredientReducer(errorState, setIngredientsRequestStatus())
    ).toEqual(requestState);
  });

  it("should handle INGREDIENTS_SUCCESS", () => {
    expect(
      ingredientReducer(initialState, setIngredientsSuccessStatus(data))
    ).toEqual(successState);
    expect(
      ingredientReducer(requestState, setIngredientsSuccessStatus(data))
    ).toEqual(successState);
    expect(
      ingredientReducer(successState, setIngredientsSuccessStatus(data))
    ).toEqual(successState);
    expect(
      ingredientReducer(errorState, setIngredientsSuccessStatus(data))
    ).toEqual(successState);
  });

  it("should handle INGREDIENTS_ERROR", () => {
    expect(
      ingredientReducer(initialState, setIngredientsErrorStatus())
    ).toEqual(errorState);
    expect(
      ingredientReducer(requestState, setIngredientsErrorStatus())
    ).toEqual(errorState);
    expect(
      ingredientReducer(successState, setIngredientsErrorStatus())
    ).toEqual(errorState);
    expect(ingredientReducer(errorState, setIngredientsErrorStatus())).toEqual(
      errorState
    );
  });
});
