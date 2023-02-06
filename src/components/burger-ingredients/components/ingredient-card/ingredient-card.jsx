import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Text from "../../../inscriptions/text";
import Digits from "../../../inscriptions/digits";
import styles from "./ingredient-card.module.css";

const IngredientCard = ({ data }) => {
  return (
    <div className={styles.container}>
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
  );
};

export default IngredientCard;
