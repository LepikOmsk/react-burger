import cn from "classnames";
import React from "react";

// Redux
import { useSelector } from "../../../redux/store";

//Components
import Digits from "../../Inscriptions/Digits";
import Text from "../../Inscriptions/Text";

// Styles
import styles from "./OrderInfo.module.css";

const OrderInfo: React.FC = () => {
  const { total, totalToday, onworkOrders, doneOrders } = useSelector(
    (store) => store.allOrders
  );

  const doneOrdersList = doneOrders.slice(0, 12).map((id) => (
    <li key={id} className={cn(styles.orders_item, styles.orders_done)}>
      <Digits type="main" number={id} />
    </li>
  ));

  const onworkOrdersList = onworkOrders.slice(0, 12).map((id) => (
    <li key={id} className={styles.orders_item}>
      <Digits type="main" number={id} />
    </li>
  ));

  return (
    <section className={styles.main}>
      <div className={cn(styles.container, "custom-scroll", styles.scroll)}>
        <div className={styles.orders}>
          <Text size="medium" type="main" text="Готовы:" />

          <ul className={styles.orders_list}>{doneOrdersList}</ul>
        </div>

        <div className={styles.orders}>
          <Text size="medium" type="main" text="В работе:" />

          <ul className={styles.orders_list}>{onworkOrdersList}</ul>
        </div>

        <div className={styles.allOrders}>
          <Text size="default" type="main" text="Выполнено за все время:" />
          <Digits size="default" type="main" number={total} />
        </div>

        <div className={styles.todayOrders}>
          <Text size="default" type="main" text="Выполнено за сегодня:" />
          <Digits size="default" type="main" number={totalToday} />
        </div>
      </div>
    </section>
  );
};

export default OrderInfo;
