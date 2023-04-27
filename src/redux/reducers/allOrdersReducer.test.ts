import {
  closedAllOrdersWSConnection,
  errorAllOrdersWSConnection,
  getAllOrders,
} from "./../actionCreators/allOrdersActionCreators";
import { successAllOrdersWSConnection } from "../actionCreators/allOrdersActionCreators";
import { IWSOrder, TAllOrdersWSActions } from "../actionTypes/allOrdersActions";
import { allOrdersReducer, IAOInitialState } from "./allOrdersReducer";

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
      total: 1337,
      totalToday: 42,
    }),
  } as MessageEvent;

  const initialState: IAOInitialState = {
    wsConnected: false,
    orders: [],
    onworkOrders: [],
    doneOrders: [],
    total: 0,
    totalToday: 0,
  };

  const successState: IAOInitialState = {
    ...initialState,
    wsConnected: true,
  };

  const errorState: IAOInitialState = {
    ...initialState,
    error: event,
  };

  const userOrdersState: IAOInitialState = {
    ...successState,
    orders: [mockOrder("done"), mockOrder("pending"), mockOrder("created")],
    onworkOrders: [mockOrder("pending").number],
    doneOrders: [mockOrder("done").number],
    total: 1337,
    totalToday: 42,
  };

  it("should return initialState", function () {
    expect(allOrdersReducer(initialState, {} as TAllOrdersWSActions)).toEqual(
      initialState
    );
  });

  it("should handle allOrdersWSActionTypes.ALL_SUCCESS", function () {
    expect(
      allOrdersReducer(initialState, successAllOrdersWSConnection(event))
    ).toEqual(successState);
  });

  it("should handle allOrdersWSActionTypes.ALL_ERROR", function () {
    expect(
      allOrdersReducer(initialState, errorAllOrdersWSConnection(event))
    ).toEqual(errorState);
  });

  it("should handle allOrdersWSActionTypes.ALL_CLOSED", function () {
    expect(
      allOrdersReducer(successState, closedAllOrdersWSConnection(event))
    ).toEqual(initialState);
  });

  it("should handle allOrdersWSActionTypes.ALL_GET_ORDERS", function () {
    expect(allOrdersReducer(successState, getAllOrders(messageEvent))).toEqual(
      userOrdersState
    );
  });
});
