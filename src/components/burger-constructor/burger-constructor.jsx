import styles from "../burger-constructor/burger-constructor.module.css";
import { useState, useMemo, useEffect } from "react";
import {
  DragIcon,
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import Digits from "../inscriptions/digits";
import PropTypes from "prop-types";
import { ORDER_URL } from "../../utils/constants";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";
import { useSelector, useDispatch } from "react-redux";
import {
  setOrderErrorStatus,
  setOrderRequestStatus,
  setOrderSuccessStatus,
} from "../../redux/actionCreators/orderDetailsActionCreator";
import { checkReponse } from "../../utils/checkResponse";

const BurgerConstructor = () => {
  const ingredients = useSelector((store) => store.ingredients.data);
  const dispatch = useDispatch();

  const [cart, setCart] = useState({
    bun: {},
    ingredients: [],
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const bun = useMemo(
    () => ingredients.find((el) => el.name === "Краторная булка N-200i"),
    [ingredients]
  );

  const main = useMemo(
    () => ingredients.filter((el) => el.type !== "bun"),
    [ingredients]
  );

  useEffect(() => {
    setCart({ bun, ingredients: main });
  }, [bun, main, setCart]);

  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: [cart.bun._id, ...cart.ingredients.map((el) => el._id)],
    }),
  };

  const fetchOrder = () => {
    dispatch(setOrderRequestStatus());

    fetch(ORDER_URL, request)
      .then((res) => checkReponse(res))
      .then((res) => dispatch(setOrderSuccessStatus(res)))
      .catch((error) => dispatch(setOrderErrorStatus()));
  };

  useEffect(() => {
    let total =
      cart.bun.price * 2 +
      cart.ingredients.reduce((sum, x) => sum + x.price, 0);
    setTotalPrice(total);
  }, [cart.bun.price, cart.ingredients, setTotalPrice]);

  const submitOrder = () => {
    setModalIsOpen(true);
    fetchOrder();
  };

  return (
    <section className={styles.containerConstructor}>
      <div className={styles.burgerConstructor}>
        <div className={styles.bun}>
          <ConstructorElement
            isLocked={true}
            type={"top"}
            text={cart.bun.name + " (верх)"}
            price={cart.bun.price}
            thumbnail={cart.bun.image}
          />
        </div>
        <div className={styles.ingredients}>
          <ul className={cn("custom-scroll", styles.scroll)}>
            {cart.ingredients.map((el, i) => (
              <li key={i} className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bun}>
          <ConstructorElement
            isLocked={true}
            type={"bottom"}
            text={cart.bun.name + " (низ)"}
            price={cart.bun.price}
            thumbnail={cart.bun.image}
          />
        </div>
      </div>
      <div className={styles.createOrder}>
        <div className={styles.price}>
          <Digits
            className="mr-5"
            type="main"
            size="medium"
            number={totalPrice || 0}
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
