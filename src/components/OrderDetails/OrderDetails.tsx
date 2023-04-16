import React from "react";
import { useParams } from "react-router-dom";

// Utils
import { useFetchOrder } from "../../utils/hooks/fetchOrder";

// Components
import OrderDetailsBody from "./components/OrderDetailsBody/OrderDetailsBody";

const OrderDetails: React.FC = () => {
  console.log("test");

  const { id = "" } = useParams();
  const { order, isLoading, hasError } = useFetchOrder(id);

  return (
    <>
      {isLoading && <h1>Загрузка...</h1>}

      {hasError && <h1>Что-то пошло не так...</h1>}

      {order && <OrderDetailsBody order={order} />}
    </>
  );
};

export default OrderDetails;
