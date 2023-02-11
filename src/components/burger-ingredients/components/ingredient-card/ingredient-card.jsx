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

const IngredientCard = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div
        className={styles.cardContainer}
        onClick={() => setModalIsOpen(true)}
      >
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={data.image} alt={data.name} />
        <div className={styles.price}>
          <Digits className="mr-5" type="default" number={data.price} />
          <CurrencyIcon type="primary" />
        </div>
        <div className={styles.text}>
          <Text type="default" text={data.name} />
        </div>
      </div>
      {modalIsOpen && <Modal closeModal={setModalIsOpen} />}
    </>
  );
};

IngredientCard.propTypes = {
  data: PropTypes.object,
};

export default IngredientCard;
