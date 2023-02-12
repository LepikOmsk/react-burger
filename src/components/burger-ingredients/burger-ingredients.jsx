import cn from "classnames";
import styles from "./burger-ingredients.module.css";
import TabIngredients from "./components/tab-ingredients/tab-ingredients";
import IngredientCategory from "./components/ingredient-category/ingredient-category";
import Text from "../inscriptions/text";
import IngredientCard from "./components/ingredient-card/ingredient-card";

const BurgerIngrediends = ({ ingredients }) => {
  const buns = ingredients
    .filter((el) => el.type === "bun")
    .map((el, i) => <IngredientCard key={i} ingredients={el} />);

  const sauces = ingredients
    .filter((el) => el.type === "sauce")
    .map((el, i) => <IngredientCard key={i} ingredients={el} />);

  const main = ingredients
    .filter((el) => el.type === "main")
    .map((el, i) => <IngredientCard key={i} ingredients={el} />);
  return (
    <>
      <div className={styles.title}>
        <Text size="large" type="main" text="Соберите бургер" />
      </div>
      <section className={styles.containerIngredients}>
        <TabIngredients />
        <div className={styles.list}>
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
        </div>
      </section>
    </>
  );
};

export default BurgerIngrediends;
