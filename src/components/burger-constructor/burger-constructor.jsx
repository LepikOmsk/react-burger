import styles from "../burger-constructor/burger-constructor.module.css";
import { useState } from "react";
import {
  DragIcon,
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import Digits from "../inscriptions/digits";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import { ORDER_IMG, dataPropTypes } from "../../utils/constants";
import Text from "../inscriptions/text";

const BurgerConstructor = ({ ingredients }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const bunTop = ingredients
    .filter((el) => el.name === "Краторная булка N-200i")
    .map((el, i) => (
      <ConstructorElement
        isLocked={true}
        type={"top"}
        text={el.name + " (верх)"}
        price={el.price}
        thumbnail={el.image}
        key={i}
      />
    ));

  const main = ingredients
    .filter((el) => el.type !== "bun")
    .map((el, i) => (
      <ConstructorElement
        text={el.name}
        price={el.price}
        thumbnail={el.image}
        key={i}
      />
    ));

  const bunBottom = ingredients
    .filter((el) => el.name === "Краторная булка N-200i")
    .map((el, i) => (
      <ConstructorElement
        isLocked={true}
        type={"bottom"}
        text={el.name + " (низ)"}
        price={el.price}
        thumbnail={el.image}
        key={i}
      />
    ));

  return (
    <section className={styles.containerConstructor}>
      <div className={styles.burgerConstructor}>
        <div className={styles.bun}>{bunTop}</div>
        <div className={styles.ingredients}>
          <ul className={cn("custom-scroll", styles.scroll)}>
            {main.map((el) => (
              <li className={styles.item}>
                <DragIcon type="primary" />
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bun}>{bunBottom}</div>
      </div>
      <div className={styles.createOrder}>
        <div className={styles.price}>
          <Digits className="mr-5" type="main" size="medium" number={610} />
          <CurrencyIcon type="primary" />
        </div>
        <Button
          onClick={() => setModalIsOpen(true)}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
      {modalIsOpen && (
        <Modal closeModal={() => setModalIsOpen(false)}>
          <div className={styles.orderId}>
            <Digits size="large" type="main" number="034536" />
          </div>
          <div className={styles.title}>
            <Text size="medium" type="main" text="Идентификатор заказа" />
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
      )}
    </section>
  );
};

ConstructorElement.propTypes = {
  isLocked: PropTypes.bool,
  type: PropTypes.oneOf(["top", "bottom"]),
  text: PropTypes.string,
  price: PropTypes.number,
};

// Сделал по аналогии с заданием в тренажере,
//  почему-то так не работает, прошу помощи

// BurgerConstructor.propTypes = {
//   ingredients: PropTypes.dataPropTypes,
// };

export default BurgerConstructor;
