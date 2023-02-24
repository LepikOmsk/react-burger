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
import { dataPropTypes } from "../../../../utils/constants";
import IngredientDetails from "../ingredient-details/ingredient-details";

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
          <IngredientDetails ingredients={ingredients} />
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
