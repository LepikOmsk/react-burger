import cn from "classnames";
import styles from "./burger-ingredients.module.css";
import TabIngredients from "./components/tab-ingredients/tab-ingredients";
import IngredientCategory from "./components/ingredient-category/ingredient-category";
import Text from "../inscriptions/text";
import IngredientCard from "./components/ingredient-card/ingredient-card";
import { useContext, useMemo } from "react";
import { IngredientsContext } from "../../utils/ingredientsContext";

const BurgerIngrediends = () => {
  const ingredients = useContext(IngredientsContext);

  const { bun, sauce, main } = useMemo(() => {
    const result = {
      bun: [],
      sauce: [],
      main: [],
    };
    ingredients.forEach((el, i) => {
      result[el.type].push(<IngredientCard key={i} ingredients={el} />);
    });
    return result;
  }, [ingredients]);

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
              <IngredientCategory text="Булки" category={bun} />
            </li>
            <li>
              <IngredientCategory text="Соусы" category={sauce} />
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
