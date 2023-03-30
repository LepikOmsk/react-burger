import { useSelector } from "../../../../redux/store";

//Компоненты
import Digits from "../../../Inscriptions/Digits";
import Text from "../../../Inscriptions/Text";
import Modal from "../../../modal/Modal";

//Константы
import { ORDER_IMG } from "../../../../utils/constants";

import styles from "../OrderDetails/OrderDetails.module.css";

const OrderDetails: React.FC = () => {
  const { name, id } = useSelector((store) => store.order.orderData);

  //! добавить isLoading hasError
  return (
    <>
      <Modal>
        <div className={styles.orderId}>
          <Digits size="large" type="main" number={id} />
        </div>
        <div className={styles.title}>
          <Text size="medium" type="main" text={name} />
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
    </>
  );
};

export default OrderDetails;
