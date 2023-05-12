import { TRootState } from "../store";

export const orderDataSelector = (store: TRootState) => store.order.orderData;
export const orderSelector = (store: TRootState) => store.order;
