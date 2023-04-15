import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../../redux/store";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  removeIngredient,
  reorderIngredients,
} from "../../../../redux/actionCreators/burgerConstructorActionsCreator";

import { useDrag, useDrop } from "react-dnd";
import { sortFunction } from "../../../../utils/sortFunction";
import styles from "./ConstructorItem.module.css";
import { TIngredient } from "../../../../utils/types/ingredientType";
import { Identifier, XYCoord } from "dnd-core";

type TConstructorItem = {
  ingredient: TIngredient;
  orderId: number;
};

const ConstructorItem: React.FC<TConstructorItem> = ({
  ingredient,
  orderId,
}) => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store) => store.burgerConstructor);

  const itemRef = React.useRef<HTMLLIElement>(null);

  const [{ isDragging }, dragSortRef] = useDrag({
    type: "SORT_INGREDIENT",
    item: {
      ingredient,
      orderId,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ handlerId }, dropSortRef] = useDrop<
    TConstructorItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "SORT_INGREDIENT",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      const dragIndex = item.orderId;
      const hoverIndex = orderId;

      if (!itemRef.current || dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = itemRef.current.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      if (ingredients) {
        dispatch(
          reorderIngredients(
            sortFunction<TIngredient>(ingredients, dragIndex, hoverIndex)
          )
        );
      }
      item.orderId = hoverIndex;
    },
  });

  dragSortRef(dropSortRef(itemRef));

  function deleteIngredient() {
    if (ingredient.uuid) dispatch(removeIngredient(ingredient.uuid));
  }

  return (
    <li
      className={`${styles.item} ${isDragging ? styles.draggable : ""}`}
      ref={itemRef}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={deleteIngredient}
      />
    </li>
  );
};

export default ConstructorItem;
