import { useSelector } from "../../../../redux/store";

//Компоненты
import Digits from "../../../Inscriptions/Digits";
import Text from "../../../Inscriptions/Text";
import Modal from "../../../modal/Modal";

//Константы
import { ORDER_IMG } from "../../../../utils/constants";

//Redux
import { orderSelector } from "../../../../redux/selectors/orderDetailsSelector";

//Styles
import styles from "../OrderModal/OrderModal.module.css";

const OrderModal: React.FC = () => {
  const { orderData, isLoading, hasError } = useSelector(orderSelector);

  return (
    <Modal>
      {isLoading ? (
        <h2>Загрузка...</h2>
      ) : hasError || !orderData ? (
        <h2>Что-то пошло не так</h2>
      ) : (
        <>
          <div className={styles.orderId}>
            <Digits size="large" type="main" number={orderData.order} />
          </div>
          <div className={styles.title}>
            <Text size="medium" type="main" text={orderData.name} />
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
        </>
      )}
    </Modal>
  );
};

export default OrderModal;
