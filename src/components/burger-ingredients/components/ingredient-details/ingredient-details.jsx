import Digits from "../../../inscriptions/digits";
import Text from "../../../inscriptions/text";
import styles from "../ingredient-details/ingredient-details.module.css";
import { useSelector } from "react-redux";

const IngredientDetails = () => {
  const { title, image, calories, proteins, fat, carbohydrates } = useSelector(
    (store) => store.currentIngredient
  );

  return (
    <>
      <img className={styles.modalImg} src={image} alt={title} />
      <div className={styles.modalTitle}>
        <Text size="medium" type="main" text={title} />
      </div>
      <ul className={styles.nutrients}>
        <li className={styles.nutrientsItem}>
          <Text size="default" type="inactive" text="Калории,ккал" />
          <Digits size="default" type="inactive" number={calories} />
        </li>
        <li className={styles.nutrientsItem}>
          <Text size="default" type="inactive" text="Белки, г" />
          <Digits size="default" type="inactive" number={proteins} />
        </li>
        <li className={styles.nutrientsItem}>
          <Text size="default" type="inactive" text="Жиры, г" />
          <Digits size="default" type="inactive" number={fat} />
        </li>
        <li className={styles.nutrientsItem}>
          <Text size="default" type="inactive" text="Углеводы, г" />
          <Digits size="default" type="inactive" number={carbohydrates} />
        </li>
      </ul>
    </>
  );
};

export default IngredientDetails;
