import styles from "../BurgerConstructor/BurgerConstructor.module.css";
import { useState, useEffect } from "react";
import {
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import Digits from "../Inscriptions/Digits";
import PropTypes from "prop-types";
import Modal from "../modal/Modal";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import { useSelector, useDispatch } from "react-redux";
import {
  setBun,
  setIngredient,
  setTotalPrice,
} from "../../redux/actionCreators/burgerConstructorActionsCreator";
import { useDrop } from "react-dnd";
import EmptyElement from "./components/EmptyElement/EmptyElement";
import ConstructorItem from "./components/ConstructorItem/ConstructorItem";
import { setOrder } from "../../redux/actionTypes/burgerConstructorActions";

const BurgerConstructor = () => {
  const { bun, ingredients, totalPrice } = useSelector(
    (store) => store.burgerConstructor
  );
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  //TotalPrice
  useEffect(() => {
    dispatch(setTotalPrice());
  }, [bun, ingredients, dispatch]);

  //DnD
  const [{ isHover }, dropTargerRef] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),

    drop(item) {
      if (item) {
        item.type === "bun"
          ? dispatch(setBun(item))
          : dispatch(setIngredient({ ...item, uuid: crypto.randomUUID() }));
      }
    },
  });

  const submitOrder = () => {
    const orderIngredients = [
      bun._id,
      ...ingredients.map((el) => el._id),
      bun._id,
    ];
    dispatch(setOrder(orderIngredients));
    setModalIsOpen(true);
  };

  return (
    <section className={styles.containerConstructor}>
      <div
        ref={dropTargerRef}
        className={`
				${styles.burgerConstructor}
				${isHover ? styles.onHover : " "}
			`}
      >
        <div className={styles.bun}>
          {bun ? (
            <ConstructorElement
              isLocked={true}
              type={"top"}
              text={bun.name + " (верх)"}
              price={bun.price}
              thumbnail={bun.image}
            />
          ) : (
            <EmptyElement position="top" title="Выберите булку" />
          )}
        </div>
        <div className={styles.ingredients}>
          {ingredients.length ? (
            <ul className={cn("custom-scroll", styles.scroll)}>
              {ingredients.map((el, i) => (
                <ConstructorItem key={el.uuid} orderId={i} ingredient={el} />
              ))}
            </ul>
          ) : (
            <EmptyElement title="Добавьте ингридиенты" />
          )}
        </div>
        <div className={styles.bun}>
          {bun ? (
            <ConstructorElement
              isLocked={true}
              type={"bottom"}
              text={bun.name + " (низ)"}
              price={bun.price}
              thumbnail={bun.image}
            />
          ) : (
            <EmptyElement position="bottom" title="Выберите булку" />
          )}
        </div>
      </div>
      <div className={styles.createOrder}>
        <div className={styles.price}>
          <Digits
            className="mr-5"
            type="main"
            size="medium"
            number={totalPrice}
          />
          <CurrencyIcon type="primary" />
        </div>
        <Button
          onClick={submitOrder}
          disabled={!bun || !ingredients.length}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
      {modalIsOpen && (
        <Modal closeModal={() => setModalIsOpen(false)}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

ConstructorElement.propTypes = {
  isLocked: PropTypes.bool,
  type: PropTypes.oneOf(["top", "bottom"]),
  text: PropTypes.string,
  price: PropTypes.number,
};

export default BurgerConstructor;
