import { ORDER_IMG } from "../../utils/constants";
import Digits from "../inscriptions/digits";
import Text from "../inscriptions/text";
import Modal from "../modal/modal";
import styles from "../order-details/order-details.module.css";

const OrderDetails = ({ closeModal, orderId, orderName }) => {
  return (
    <Modal closeModal={closeModal}>
      <div className={styles.orderId}>
        <Digits size="large" type="main" number={orderId} />
      </div>
      <div className={styles.title}>
        <Text size="medium" type="main" text={orderName} />
      </div>
      <img className={styles.img} src={ORDER_IMG} alt="Заказ принят" />
      <div className={styles.startCooking}>
        <Text size="default" type="main" text="Ваш заказ начали готовить" />
      </div>
      <Text
        size="default"
        type="inactive"
        text="Дождитесь готовности на орбитальной станции"
      />
    </Modal>
  );
};

export default OrderDetails;
