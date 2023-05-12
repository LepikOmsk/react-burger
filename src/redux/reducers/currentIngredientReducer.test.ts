import { TIngredient } from "../../utils/types/ingredientType"
import { resetIngredientDetails, setIngredientDetails } from "../actionCreators/currentIngredientActionCreator"
import { TCurrentIngredientActions } from "../actionTypes/currentIngregredientActions"
import { currentIngredientReducer } from "./currentIngredientReducer"


describe('Current Ingredient Reducer test', () => {
  const initialState = null

  it('should return the initial state', () => {
    expect(currentIngredientReducer(initialState, {} as TCurrentIngredientActions)).toEqual(
      initialState,
    )
  })

  it('should handle SET_CURRENT_INGREDIENT_DETAILS', () => {
    const ingredient: TIngredient = {
      _id: '60d3b41abdacab0026a733c6',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    }
    const expectedState = ingredient

    expect(currentIngredientReducer(initialState, setIngredientDetails(ingredient))).toEqual(
      expectedState,
    )
  })

  it('should handle RESET_CURRENT_INGREDIENT_DETAILS', () => {
    expect(currentIngredientReducer(initialState, resetIngredientDetails())).toEqual(
      initialState,
    )
  })
})
