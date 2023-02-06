import Text from "../../../inscriptions/text";
import styles from "../ingredient-category/ingredient-category.module.css";

const IngredientCategory = (props) => {
  return (
    <>
      <div className={styles.title}>
        <Text type="medium" text={props.text} />
      </div>

      <div className={styles.container}>{props.category}</div>
    </>
  );
};

export default IngredientCategory;
