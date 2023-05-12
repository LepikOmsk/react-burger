import React, { useMemo } from "react";
import cn from "classnames";

// Redux
import { IWSOrder } from "../../../redux/actionTypes/allOrdersActions";

// Components
import OrderCard from "./components/OrderCard/OrderCard";

// Styles
import styles from "./OrderFeed.module.css";

interface IOrderFeed {
  orders: IWSOrder[];
  isStatusShown?: boolean;
  modalPath: string;
}

const OrderFeed: React.FC<IOrderFeed> = ({
  orders,
  isStatusShown = false,
  modalPath,
}) => {
  const orderList = useMemo(
    () =>
      orders
        .slice(0, 12)
        .map((el) => (
          <OrderCard
            isStatusShown={isStatusShown}
            key={el._id}
            order={el}
            modalPath={modalPath}
          />
        )),
    [isStatusShown, modalPath, orders]
  );

  return (
    <section className={styles.main}>
      <ul className={cn(styles.list, "custom-scroll", styles.scroll)}>
        {orderList}
      </ul>
    </section>
  );
};

export default OrderFeed;
