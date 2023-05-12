import React from "react";

import { useParams } from "react-router-dom";

//Components
import Modal from "../../../modal/Modal";
import OrderDetails from "../../OrderDetails";

// Components

const OrderDetailsModal: React.FC = () => {
  const { id = "" } = useParams();

  return (
    <Modal title={`#${id}`} titleSize="small">
      <OrderDetails />
    </Modal>
  );
};

export default OrderDetailsModal;
