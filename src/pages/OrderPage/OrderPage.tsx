import React from "react";
import classNames from "classnames";

// Components
import OrderDetails from "../../components/OrderDetails/OrderDetails";

// Styles
import styles from "./OrderPage.module.css";

const OrderPage: React.FC = () => {
  return (
    <main className={classNames("container", styles.main)}>
      <OrderDetails />
    </main>
  );
};

export default OrderPage;
