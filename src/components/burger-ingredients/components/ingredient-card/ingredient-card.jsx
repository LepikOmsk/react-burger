import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Text from "../../../inscriptions/text";
import Digits from "../../../inscriptions/digits";
import styles from "./ingredient-card.module.css";
import PropTypes from "prop-types";
import Modal from "../../../modal/modal";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { dataPropTypes } from "../../../../utils/constants";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {
  resetIngredientDetails,
  setIngredientDetails,
} from "../../../../redux/actionCreators/currentIngredientActionCreator";

const IngredientCard = ({ ingredient }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const submitIngredientDetails = () => {
    setModalIsOpen(true);
    dispatch(
      setIngredientDetails({
        title: ingredient.name,
        image: ingredient.image_large,
        calories: ingredient.calories,
        proteins: ingredient.proteins,
        fat: ingredient.fat,
        carbohydrates: ingredient.carbohydrates,
      })
    );
  };

  // const deleteIngredientDetails = () => {
  //   setModalIsOpen(false);
  //   dispatch(resetIngredientDetails);
  // };

  return (
    <>
      <div className={styles.cardContainer} onClick={submitIngredientDetails}>
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={ingredient.image} alt={ingredient.name} />
        <div className={styles.price}>
          <Digits type="main" size="default" number={ingredient.price} />
          <CurrencyIcon type="primary" />
        </div>
        <div className={styles.text}>
          <Text size="default" type="main" text={ingredient.name} />
        </div>
      </div>
      {modalIsOpen && (
        <Modal
          title="Детали ингридиента"
          closeModal={() => setModalIsOpen(false)}
        >
          <IngredientDetails />
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
