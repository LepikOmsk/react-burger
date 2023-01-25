import cn from "classnames";
import styles from "./burger-ingredients.module.css";
import TabIngredients from "./components/tab-ingrediensts/tab-ingredients";
import data from "../utils/data";
import Text from "../inscriptions/text";
import IngredientCard from "./components/ingredient-card/ingredient-card";

const BurgerInegrediends = () => {
  const ingredients = data
    .filter((el) => el.type === "bun")
    .map((el) => <IngredientCard data={el} />);
  return (
    <main className={styles.containerIngredients}>
      <div
        className="mt-10 mb-5"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <Text type="large" text="Соберите бургер" styles={styles.title} />
      </div>
      <TabIngredients />
      <div className="mt-10 mb-6">
        <Text type="medium" text="Булки" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {ingredients}
      </div>
    </main>
  );
};

export default BurgerInegrediends;
