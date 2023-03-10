import { useMemo, useState } from "react";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCategory from "./components/IngredientCategory/IngredientCategory";
import IngredientCard from "./components/IngredientCard/IngredientCard";
import Text from "../Inscriptions/Text";
import { ingredientGroups } from "../../utils/ingredientGroups";
import cn from "classnames";
import styles from "./BurgerIngredients.module.css";

const BurgerIngrediends = () => {
  const ingredients = useSelector((store) => store.ingredients.data);

  const [currentTab, setCurrentTab] = useState(ingredientGroups[0].title);

  const { bun, sauce, main } = useMemo(() => {
    const result = {
      bun: [],
      sauce: [],
      main: [],
    };
    ingredients.forEach((el, i) => {
      result[el.type].push(<IngredientCard key={i} ingredient={el} />);
    });
    return result;
  }, [ingredients]);

  // Навигация по табам
  const tabList = ingredientGroups.map((tab, i) => (
    <Link
      key={i}
      to={`ingredients-block-${++i}`}
      spy={true}
      smooth={true}
      duration={800}
      offset={-20}
      containerId="ingredients"
      onSetActive={() => setCurrentTab(tab.title)}
    >
      <Tab value={tab.title} active={currentTab === tab.title}>
        {tab.title}
      </Tab>
    </Link>
  ));

  return (
    <>
      <div className={styles.title}>
        <Text size="large" type="main" text="Соберите бургер" />
      </div>
      <section className={styles.containerIngredients}>
        <div className={styles.tab}>{tabList} </div>

        <div className={styles.list}>
          <ul id="ingredients" className={cn("custom-scroll", styles.scroll)}>
            <li id="ingredients-block-1">
              <IngredientCategory text="Булки" category={bun} />
            </li>
            <li id="ingredients-block-2">
              <IngredientCategory text="Соусы" category={sauce} />
            </li>
            <li id="ingredients-block-3">
              <IngredientCategory text="Начинки" category={main} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default BurgerIngrediends;
