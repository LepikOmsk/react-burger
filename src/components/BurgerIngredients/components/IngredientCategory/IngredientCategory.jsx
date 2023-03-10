import Text from "../../../Inscriptions/Text";
import styles from "../IngredientCategory/IngredientCategory.module.css";
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
  category: PropTypes.arrayOf(PropTypes.element),
};

export default IngredientCategory;
