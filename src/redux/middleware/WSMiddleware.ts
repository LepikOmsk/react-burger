import { Middleware, MiddlewareAPI } from "redux";
import { refreshTokens } from "../../utils/authUtils/refreshToken";
import { AppDispatch, TAppActions, TRootState } from "../store";

type TOnMessage =
  | {
      success: false;
      message: string;
    }
  | {
      success: true;
      orders: [];
      total: number;
      totalToday: number;
    };

interface IWSActions {
  wsStart: string;
  wsStop: string;
  onOpen: (event: Event) => TAppActions;
  onMessage: (event: MessageEvent) => TAppActions;
  onError: (event: Event) => TAppActions;
  onClose: (event: Event) => TAppActions;
}

export const WSMiddleware = (WSActions: IWSActions): Middleware =>
  ((store: MiddlewareAPI<AppDispatch, TRootState>) => {
    let socket: WebSocket | null = null;
    let wsUrl = "";

    return (next) => (action: TAppActions) => {
      const { dispatch } = store;

      if (action.type === WSActions.wsStart) {
        wsUrl = (action as { payload: string }).payload;
        socket = new WebSocket(wsUrl);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch(WSActions.onOpen(event));
        };

        socket.onerror = (event) => {
          dispatch(WSActions.onError(event));
        };

        socket.onmessage = (event: MessageEvent<string>) => {
          const data = JSON.parse(event.data) as TOnMessage;

          if (!data.success && data.message === "Invalid or missing token") {
            socket?.close();

            refreshTokens().then(() =>
              dispatch({
                type: action.type,
                payload: wsUrl,
              } as TAppActions)
            );
          } else {
            dispatch(WSActions.onMessage(event));
          }
        };
        socket.onclose = (event) => {
          dispatch(WSActions.onClose(event));
        };

        if (action.type === WSActions.wsStop) {
          socket.close();
        }
      }
      next(action);
    };
  }) as Middleware;
