import Text from "../../../inscriptions/text";
import styles from "../ingredient-category/ingredient-category.module.css";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../../../utils/constants";

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

// И так тоже почему-то не работает)

// IngredientCategory.propTypes = {
//   category: PropTypes.node.arrayOf(PropTypes.dataPropTypes),
// };

IngredientCategory.propTypes = {
  category: PropTypes.arrayOf(PropTypes.element),
};

export default IngredientCategory;
