import {
  closedUserOrdersWSConnection,
  errorUserOrdersWSConnection,
  getUserOrders,
  successUserOrdersWSConnection,
} from "../actionCreators/userOrdersActionCreators";
import { IWSOrder } from "../actionTypes/allOrdersActions";
import { TUserOrdersWSActions } from "../actionTypes/userOrdersActions";
import { IUOInitialState, userOrdersReducer } from "./userOrdersReducer";

export function mockOrder(status: "created" | "pending" | "done"): IWSOrder {
  return {
    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
    _id: "_id",
    name: "name",
    number: 1337,
    status: status,
    createdAt: "date",
    updatedAt: "date",
  };
}

describe("User Orders WS Reducer tests", function () {
  const event: Event = {} as Event;
  const messageEvent: MessageEvent = {
    data: JSON.stringify({
      orders: [mockOrder("done"), mockOrder("pending"), mockOrder("created")],
    }),
  } as MessageEvent;

  const initialState: IUOInitialState = {
    wsConnected: false,
    orders: null,
  };

  const successState: IUOInitialState = {
    ...initialState,
    wsConnected: true,
  };

  const errorState: IUOInitialState = {
    ...initialState,
    error: event,
  };

  const userOrdersState: IUOInitialState = {
    ...successState,
    orders: [mockOrder("done"), mockOrder("pending"), mockOrder("created")],
  };

  it("should return initialState", function () {
    expect(userOrdersReducer(initialState, {} as TUserOrdersWSActions)).toEqual(
      initialState
    );
  });

  it("should handle userOrdersWSActionTypes.USER_SUCCESS", function () {
    expect(
      userOrdersReducer(initialState, successUserOrdersWSConnection(event))
    ).toEqual(successState);
  });

  it("should handle userOrdersWSActionTypes.USER_ERROR", function () {
    expect(
      userOrdersReducer(initialState, errorUserOrdersWSConnection(event))
    ).toEqual(errorState);
  });

  it("should handle userOrdersWSActionTypes.USER_CLOSED", function () {
    expect(
      userOrdersReducer(successState, closedUserOrdersWSConnection(event))
    ).toEqual(initialState);
  });

  it("should handle userOrdersWSActionTypes.USER_GET_ORDERS", function () {
    expect(
      userOrdersReducer(successState, getUserOrders(messageEvent))
    ).toEqual(userOrdersState);
  });
});
