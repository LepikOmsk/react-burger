import IngredientDetails from "../../components/BurgerIngredients/components/IngredientDetails/IngredientDetails";
import Text from "../../components/Inscriptions/Text";

import styles from "./IngredientPage.module.css";

const IngredientPage = () => {
  return (
    <div className={`container ${styles.main}`}>
      <Text size="large" type="main" text="Детали ингредиента" />
      <IngredientDetails />
    </div>
  );
};

export default IngredientPage;
