import React from "react";

// Types
import { TIngredient } from "../../../../utils/types/ingredientType";

// Components
import PriceCard from "../../../Feed/OrderFeed/components/PriceCard/PriceCard";
import IngredientIcon from "../../../Feed/OrderFeed/components/IngredientIcon/IngredientIcon";
import Text from "../../../Inscriptions/Text";

// Styles
import styles from "./OrderRow.module.css";

interface IOrderRow {
  ingredient: TIngredient;
  count: number;
}

const OrderRow: React.FC<IOrderRow> = ({ ingredient, count }) => {
  return (
    <li className={styles.main}>
      <IngredientIcon image={ingredient.image_mobile} />
      <div className={styles.title}>
        <Text size="default" type="main" text={ingredient.name} />
      </div>

      <PriceCard size="small" prefix={count} price={ingredient.price} />
    </li>
  );
};

export default OrderRow;
