import { useMemo } from "react";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../../../redux/store";

import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Text from "../../../Inscriptions/Text";
import Digits from "../../../Inscriptions/Digits";

import styles from "./IngredientCard.module.css";
import { TIngredient } from "../../../../utils/types/ingredientType";

interface IIngredientCard {
  ingredient: TIngredient;
}

const IngredientCard: React.FC<IIngredientCard> = ({ ingredient }) => {
  const location = useLocation();

  //Counter
  const { bun, ingredients } = useSelector((store) => store.burgerConstructor);

  const count = useMemo(() => {
    return ingredient.type === "bun"
      ? bun?._id === ingredient._id
        ? 2
        : 0
      : ingredients.filter((item: TIngredient) => item._id === ingredient._id)
          .length;
  }, [ingredient, bun, ingredients]);

  //DnD
  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });
  //-------------------------------

  return (
    <>
      <Link
        className={styles.cardContainer}
        ref={dragRef}
        style={{ opacity }}
        state={{ background: location }}
        to={`/ingredients/${ingredient._id}`}
      >
        {count ? (
          <Counter count={count} size="default" extraClass="m-1" />
        ) : null}
        <img src={ingredient.image} alt={ingredient.name} />
        <div className={styles.price}>
          <Digits type="main" size="default" number={ingredient.price} />
          <CurrencyIcon type="primary" />
        </div>
        <div className={styles.text}>
          <Text size="default" type="main" text={ingredient.name} />
        </div>
      </Link>
    </>
  );
};

export default IngredientCard;
