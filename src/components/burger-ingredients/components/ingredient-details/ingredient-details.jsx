import Digits from "../../../inscriptions/digits";
import Text from "../../../inscriptions/text";
import styles from "../ingredient-details/ingredient-details.module.css";

const IngredientDetails = ({ ingredients }) => {
  return (
    <>
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
    </>
  );
};

export default IngredientDetails;
