import { TIngredient } from "../../utils/types/ingredientType";
import {
  removeIngredient,
  reorderIngredients,
  setBun,
  setIngredient,
} from "../actionCreators/burgerConstructorActionsCreator";
import { TBurgerConstructorActions } from "../actionTypes/burgerConstructorActions";
import { burgerConstructorReducer } from "./burgerConstructorReducer";

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
    uuid: "test value",
  } as TIngredient;
}

describe("BurgerConstrutor Reducer tests", function () {
  const initialState = {
    bun: null,
    ingredients: null,
  };

  const setBunState = {
    ...initialState,
    bun: ingredientCreator("bun"),
  };

  const ingredientState = {
    ...initialState,
    ingredients: [ingredientCreator("main")],
  };

  const ingredientsState = {
    ...initialState,
    ingredients: [ingredientCreator("main"), ingredientCreator("sauce")],
  };

  const ingredientsRemoveState = {
    ...initialState,
    ingredients: [
      ingredientCreator("main"),
      { ...ingredientCreator("sauce"), uuid: "test value 2" },
    ],
  };

  it("should return initialState", function () {
    expect(
      burgerConstructorReducer(initialState, {} as TBurgerConstructorActions)
    ).toEqual(initialState);
  });

  it("should handle SET_BUN", function () {
    expect(
      burgerConstructorReducer(initialState, setBun(ingredientCreator("bun")))
    ).toEqual(setBunState);
  });

  it("should handle SET_INGREDIENT", function () {
    expect(
      burgerConstructorReducer(
        initialState,
        setIngredient(ingredientCreator("main"))
      )
    ).toEqual(ingredientState);

    expect(
      burgerConstructorReducer(
        ingredientState,
        setIngredient(ingredientCreator("sauce"))
      )
    ).toEqual(ingredientsState);
  });

  it("should handle REMOVE_INGREDIENT", function () {
    expect(
      burgerConstructorReducer(initialState, removeIngredient("test value"))
    ).toEqual(initialState);
    expect(
      burgerConstructorReducer(ingredientState, removeIngredient("test value"))
    ).toEqual(initialState);
    expect(
      burgerConstructorReducer(
        ingredientsRemoveState,
        removeIngredient("test value 2")
      )
    ).toEqual(ingredientState);
  });

  it("should handle REORDER_INGREDIENTS", function () {
    const ingredients = [ingredientCreator("main"), ingredientCreator("sauce")];

    const expected = { ...ingredientState, ingredients };

    expect(
      burgerConstructorReducer(ingredientState, reorderIngredients(ingredients))
    ).toEqual(expected);
  });
});
