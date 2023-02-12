import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Text from "../../../inscriptions/text";
import Digits from "../../../inscriptions/digits";
import styles from "./ingredient-card.module.css";
import PropTypes from "prop-types";
import Modal from "../../../modal/modal";
import { useState } from "react";
import { dataPropTypes } from "../../../utils/constants";

const IngredientCard = ({ ingredients }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div
        className={styles.cardContainer}
        onClick={() => setModalIsOpen(true)}
      >
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={ingredients.image} alt={ingredients.name} />
        <div className={styles.price}>
          <Digits type="main" size="default" number={ingredients.price} />
          <CurrencyIcon type="primary" />
        </div>
        <div className={styles.text}>
          <Text size="default" type="main" text={ingredients.name} />
        </div>
      </div>
      {modalIsOpen && (
        <Modal
          title="Детали ингридиента"
          closeModal={() => setModalIsOpen(false)}
        >
          <img
            className={styles.modalImg}
            src={ingredients.image_large}
            alt={ingredients.name}
          />
          <div className={styles.modalTitle}>
            <Text size="medium" type="main" text={ingredients.name} />
          </div>
          <ul className={styles.nutrients}>
            <li className={styles.nutrientsItem}>
              <Text size="default" type="inactive" text="Калории,ккал" />
              <Digits
                size="default"
                type="inactive"
                number={ingredients.calories}
              />
            </li>
            <li className={styles.nutrientsItem}>
              <Text size="default" type="inactive" text="Белки, г" />
              <Digits
                size="default"
                type="inactive"
                number={ingredients.proteins}
              />
            </li>
            <li className={styles.nutrientsItem}>
              <Text size="default" type="inactive" text="Жиры, г" />
              <Digits size="default" type="inactive" number={ingredients.fat} />
            </li>
            <li className={styles.nutrientsItem}>
              <Text size="default" type="inactive" text="Углеводы, г" />
              <Digits
                size="default"
                type="inactive"
                number={ingredients.carbohydrates}
              />
            </li>
          </ul>
        </Modal>
      )}
    </>
  );
};

// Сделал по аналогии с заданием в тренажере,
//  почему-то так не работает, прошу помощи

// IngredientCard.propTypes = {
//   ingredients: PropTypes.dataPropTypes,
// };

export default IngredientCard;
