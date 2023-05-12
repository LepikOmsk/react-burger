import React from "react";
import classNames from "classnames";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

// Utils
import { TIngredient } from "../../../../../utils/types/ingredientType";

// Styles
import styles from "./PriceCard.module.css";

interface IPriceCard {
  ingredients?: TIngredient[];
  price?: number;
  size?: "small" | "medium";
  prefix?: number;
}

const PriceCard: React.FC<IPriceCard> = ({
  ingredients,
  price,
  size = "small",
  prefix,
}) => {
  let totalPrice = 0;

  if (price) totalPrice = price;

  if (ingredients)
    totalPrice = (() => {
      const bun = ingredients.find((el) => el.type === "bun");
      const ingredientsList = ingredients.filter((el) => el.type !== "bun");
      const totalIngredientsList = bun
        ? [bun, ...ingredientsList, bun]
        : ingredientsList;

      return totalIngredientsList.reduce((sum, el) => sum + el.price, 0);
    })();

  return (
    <div className={classNames(styles.price, styles[size])}>
      <span>
        {prefix && `${prefix} x `}
        {totalPrice}
      </span>
      <CurrencyIcon type="primary" />
    </div>
  );
};

export default PriceCard;
