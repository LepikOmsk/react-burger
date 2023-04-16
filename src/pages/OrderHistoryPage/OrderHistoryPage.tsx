import React from "react";

//Redux
import { useSelector } from "react-redux";
import {
  startUserOrdersWSConnection,
  stopUserOrdersWSConnection,
} from "../../redux/actionCreators/userOrdersActionCreators";
import { userOrderSelector } from "../../redux/selectors/userOrdersSelector";
import { useDispatch } from "../../redux/store";

//Utils
import { getCookie } from "../../utils/authUtils/cookie";
import { WS_USER_ORDERS } from "../../utils/constants";

// Components
import OrderFeed from "../../components/Feed/OrderFeed/OrderFeed";

const OrderHistory: React.FC = () => {
  const dispatch = useDispatch();
  const accessToken = getCookie("accessToken") || "";
  const orders = useSelector(userOrderSelector);

  React.useEffect(() => {
    dispatch(
      startUserOrdersWSConnection(`${WS_USER_ORDERS}?token=${accessToken}`)
    );

    return () => {
      dispatch(stopUserOrdersWSConnection());
    };
  }, [dispatch, accessToken]);

  return (
    <>
      {!orders.length ? (
        <h1>Загрузка...</h1>
      ) : (
        <OrderFeed
          orders={[...orders].reverse()}
          isStatusShown
          modalPath={"/profile/orders"}
        />
      )}
    </>
  );
};

export default OrderHistory;
