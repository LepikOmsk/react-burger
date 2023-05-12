import React, { useEffect } from "react";
import cn from "classnames";

// Redux
import { useDispatch, useSelector } from "../../redux/store";
import {
  startAllOrdersWSConnection,
  stopAllOrdersWSConnection,
} from "../../redux/actionCreators/allOrdersActionCreators";

import { WS_ALL_ORDERS } from "../../utils/constants";

// Components
import OrderInfo from "../../components/Feed/OrderInfo/OrderInfo";
import OrderFeed from "../../components/Feed/OrderFeed/OrderFeed";
import Text from "../../components/Inscriptions/Text";

// Styles
import styles from "./FeedPage.module.css";

const FeedPage: React.FC = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((store) => store.allOrders);

  useEffect(() => {
    dispatch(startAllOrdersWSConnection(WS_ALL_ORDERS));

    return () => {
      dispatch(stopAllOrdersWSConnection());
    };
  }, [dispatch]);

  return (
    <main className={cn("container", styles.wrapper)}>
      {!orders.length ? (
        <h2>Загрузка...</h2>
      ) : (
        <>
          <div className={styles.title}>
            <Text size="large" type="main" text="Лента заказов" />
          </div>

          <OrderFeed orders={orders} modalPath={"/feed"} />
          <OrderInfo />
        </>
      )}
    </main>
  );
};

export default FeedPage;
