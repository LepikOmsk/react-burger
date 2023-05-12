import { setOrderErrorStatus, setOrderRequestStatus, setOrderSuccessStatus } from "../actionCreators/orderDetailsActionCreator"
import { TOrderActions } from "../actionTypes/orderDetailsActions"
import { IOrderDetailsState, orderDetailsReducer } from "./orderDetailsReducer"


describe('Order Reducer tests', function () {
  const initialState: IOrderDetailsState = {
    orderData: null,
    isLoading: false,
    hasError: false,
  }

  const requestState = {
    ...initialState,
    isLoading: true,
  }

  const response = {
    name: 'Some burger',
    order: {
      number: 1235467,
    },
  }

  const successState = {
    ...initialState,
    orderData: {
      name: response.name,
      order: response.order.number,
    },
    isLoading: false,
    hasError: false,
  }

  const errorState = {
    ...initialState,
    hasError: true,
  }

  it('should return the initial state', function () {
    expect(orderDetailsReducer(initialState, {} as TOrderActions)).toEqual(initialState)
    expect(orderDetailsReducer(requestState, {} as TOrderActions)).toEqual(requestState)
    expect(orderDetailsReducer(successState, {} as TOrderActions)).toEqual(successState)
    expect(orderDetailsReducer(errorState, {} as TOrderActions)).toEqual(errorState)
  })

  it('should handle ORDER_REQUEST', function () {
    expect(orderDetailsReducer(initialState, setOrderRequestStatus())).toEqual(requestState)
    expect(orderDetailsReducer(requestState, setOrderRequestStatus())).toEqual(requestState)
    expect(orderDetailsReducer(successState, setOrderRequestStatus())).toEqual(requestState)
    expect(orderDetailsReducer(errorState, setOrderRequestStatus())).toEqual(requestState)
  })

  it('should handle ORDER_SUCCESS', function () {
    expect(orderDetailsReducer(initialState, setOrderSuccessStatus(response))).toEqual(
      successState,
    )
    expect(orderDetailsReducer(requestState, setOrderSuccessStatus(response))).toEqual(
      successState,
    )
    expect(orderDetailsReducer(successState, setOrderSuccessStatus(response))).toEqual(
      successState,
    )
    expect(orderDetailsReducer(errorState, setOrderSuccessStatus(response))).toEqual(
      successState,
    )
  })

  it('should handle ORDER_ERROR', function () {
    expect(orderDetailsReducer(initialState, setOrderErrorStatus())).toEqual(errorState)
    expect(orderDetailsReducer(requestState, setOrderErrorStatus())).toEqual(errorState)
    expect(orderDetailsReducer(successState, setOrderErrorStatus())).toEqual(errorState)
    expect(orderDetailsReducer(errorState, setOrderErrorStatus())).toEqual(errorState)
  })
})
