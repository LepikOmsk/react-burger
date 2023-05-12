import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";

// Redux
import { IWSOrder } from "../../../../../redux/actionTypes/allOrdersActions";
import { useSelector } from "../../../../../redux/store";
import { ingredientsDataSelector } from "../../../../../redux/selectors/ingredientsSelector";

// Utils
import { OrderStatus } from "../../../../../utils/constants";

// Components
import IngredientsList from "../IngredientsList/IngredientsList";
import Digits from "../../../../Inscriptions/Digits";
import Text from "../../../../Inscriptions/Text";
import PriceCard from "../PriceCard/PriceCard";

// Styles
import styles from "./OrderCard.module.css";

interface IOrderCard {
  order: IWSOrder;
  isStatusShown: boolean;
  modalPath: string;
}

const OrderCard: React.FC<IOrderCard> = ({
  order,
  isStatusShown,
  modalPath,
}) => {
  const location = useLocation();
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

  const uniqueIngredientsList = [...new Set(currentIngredients)];

  // Date
  const displayedDate = order.createdAt;

  return (
    <Link
      className={styles.main}
      state={{ background: location }}
      to={`${modalPath}/${order.number}`}
    >
      <div className={styles.header}>
        <div className={styles.suptitle}>
          <Digits type="main" number={`#${order.number}`} />
        </div>
        <div className={styles.timing}>
          <FormattedDate
            className="text text_type_main-default text_color_inactive"
            date={new Date(displayedDate)}
          />
        </div>
      </div>

      <div className={styles.title}>
        <Text size="medium" type="main" text={order.name} />

        {isStatusShown && (
          <div className={styles[`title_${order.status}`]}>
            <Text size="default" type="main" text={OrderStatus[order.status]} />
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <IngredientsList ingredients={uniqueIngredientsList} />
        <PriceCard size="small" ingredients={currentIngredients} />
      </div>
    </Link>
  );
};

export default OrderCard;
