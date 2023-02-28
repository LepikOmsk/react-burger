import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  removeIngredient,
  reorderIngredients,
} from "../../../../redux/actionCreators/burgerConstructorActionsCreator";

import styles from "./constructor-item.module.css";
import { useDrag, useDrop } from "react-dnd";
import { sortFunction } from "../../../../utils/sortFunction";

const ConstructorItem = ({ ingredient, orderId }) => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store) => store.burgerConstructor);

  const itemRef = React.useRef(null);

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

  const [{ handlerId }, dropSortRef] = useDrop({
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

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(
        reorderIngredients(sortFunction(ingredients, dragIndex, hoverIndex))
      );

      item.orderId = hoverIndex;
    },
  });

  dragSortRef(dropSortRef(itemRef));

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
        handleClose={() => dispatch(removeIngredient(ingredient.uuid))}
      />
    </li>
  );
};

export default ConstructorItem;
