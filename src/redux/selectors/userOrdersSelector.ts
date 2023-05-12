import { TRootState } from "../store";

export const userOrderSelector = (store: TRootState) => store.userOrders.orders;
