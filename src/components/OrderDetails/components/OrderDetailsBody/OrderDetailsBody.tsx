import React from "react";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";

//Redux
import { useSelector } from "../../../../redux/store";
import { ingredientsDataSelector } from "../../../../redux/selectors/ingredientsSelector";

// Types
import { IWSOrder } from "../../../../redux/actionTypes/allOrdersActions";

// Utils
import { OrderStatus } from "../../../../utils/constants";

// Components
import OrderRow from "../OrderRow/OrderRow";
import PriceCard from "../../../Feed/OrderFeed/components/PriceCard/PriceCard";
import Text from "../../../Inscriptions/Text";

// Styles
import styles from "./OrderDetailsBody.module.css";

interface IOrderDetailsBody {
  order: IWSOrder;
}

const OrderDetailsBody: React.FC<IOrderDetailsBody> = ({ order }) => {
  const date = order.createdAt;

  const allIngredients = useSelector(ingredientsDataSelector);

  const currentIngredients = (() => {
    const result = [];

    if (allIngredients) {
      for (const id of order.ingredients) {
        const ingredient = allIngredients.find(
          (ingredient) => ingredient._id === id
        );

        if (ingredient) result.push(ingredient);
      }
    }
    return result;
  })();

  const ingredientsList = [...new Set(currentIngredients)].map((ingredient) => {
    const count =
      ingredient.type === "bun"
        ? 2
        : currentIngredients?.filter((el) => el._id === ingredient._id).length;

    return (
      <OrderRow
        count={count || 0}
        ingredient={ingredient}
        key={ingredient._id}
      />
    );
  });

  return (
    <div className={styles.main}>
      <div className={styles.name}>
        <Text size="medium" type="main" text={order.name} />
      </div>

      <div className={styles.status}>
        <Text size="default" type="main" text={OrderStatus[order.status]} />
      </div>

      <div className={styles.composition}>
        <Text size="medium" type="main" text="Состав:" />
      </div>
   

      <ul className={cn(styles.ingredients, "custom-scroll", styles.scroll)}>
        {ingredientsList}
      </ul>

      <div className={styles.footer}>
        <div className={styles.timing}>
          <FormattedDate date={new Date(date)} />
        </div>

        <PriceCard size="small" ingredients={currentIngredients} />
      </div>
    </div>
  );
};

export default OrderDetailsBody;
