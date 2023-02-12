import Text from "../../../inscriptions/text";
import styles from "../ingredient-category/ingredient-category.module.css";
import PropTypes from "prop-types";

const IngredientCategory = (props) => {
  return (
    <>
      <div className={styles.title}>
        <Text size="medium" type="main" text={props.text} />
      </div>
      <div className={styles.categoryContainer}>{props.category}</div>
    </>
  );
};

IngredientCategory.propTypes = {
  category: PropTypes.object,
};

export default IngredientCategory;
