import cn from "classnames";
import styles from "./burger-ingredients.module.css";
import TabIngredients from "./components/tab-ingrediensts/tab-ingredients";
import IngredientCategory from "./components/ingredient-category/ingredient-category";
import data from "../utils/data";
import Text from "../inscriptions/text";
import IngredientCard from "./components/ingredient-card/ingredient-card";

const buns = data
  .filter((el) => el.type === "bun")
  .map((el) => <IngredientCard data={el} />);

const sauces = data
  .filter((el) => el.type === "sauce")
  .map((el) => <IngredientCard data={el} />);

const main = data
  .filter((el) => el.type === "main")
  .map((el) => <IngredientCard data={el} />);

const BurgerIngrediends = () => {
  return (
    <section className={styles.containerIngredients}>
      <div className={cn("mb-5", styles.title)}>
        <Text type="large" text="Соберите бургер" />
      </div>
      <TabIngredients />
      <ul className={cn("custom-scroll", styles.scroll)}>
        <li>
          <IngredientCategory text="Булки" category={buns} />
        </li>
        <li>
          <IngredientCategory text="Соусы" category={sauces} />
        </li>
        <li>
          <IngredientCategory text="Начинки" category={main} />
        </li>
      </ul>
    </section>
  );
};

export default BurgerIngrediends;
