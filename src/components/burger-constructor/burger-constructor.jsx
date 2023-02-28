import styles from "../burger-constructor/burger-constructor.module.css";
import { useState, useEffect } from "react";
import {
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import Digits from "../inscriptions/digits";
import PropTypes from "prop-types";
import { ORDER_URL } from "../../utils/constants";
import Modal from "../modal/modal";
import OrderDetails from "./components/order-details/order-details";
import { useSelector, useDispatch } from "react-redux";
import {
  setOrderErrorStatus,
  setOrderRequestStatus,
  setOrderSuccessStatus,
} from "../../redux/actionCreators/orderDetailsActionCreator";
import { checkReponse } from "../../utils/checkResponse";
import {
  setBun,
  setIngredient,
  setTotalPrice,
} from "../../redux/actionCreators/burgerConstructorActionsCreator";
import { useDrop } from "react-dnd";
import EmptyElement from "./components/empty-element/empty-element";
import ConstructorItem from "./components/constructor-item/constructor-item";

const BurgerConstructor = () => {
  const { bun, ingredients, totalPrice } = useSelector(
    (store) => store.burgerConstructor
  );
  const dispatch = useDispatch();

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

  const [modalIsOpen, setModalIsOpen] = useState(false);

  //   Получение номер и названия заказа
  // ToDo сделать проверки на наличие булок/ингредиентов if (bun && ingredients.length) {
  const fetchOrder = () => {
    dispatch(setOrderRequestStatus());

    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: [bun._id, ...ingredients.map((el) => el._id)],
      }),
    };

    fetch(ORDER_URL, request)
      .then((res) => checkReponse(res))
      .then((res) => dispatch(setOrderSuccessStatus(res)))
      .catch((error) => dispatch(setOrderErrorStatus()));
  };
  //-----------------------------------------------------

  const submitOrder = () => {
    setModalIsOpen(true);
    fetchOrder();
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
