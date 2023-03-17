import styles from "../BurgerConstructor/BurgerConstructor.module.css";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import PropTypes from "prop-types";
import cn from "classnames";

import {
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Digits from "../Inscriptions/Digits";
import {
  setBun,
  setIngredient,
  setTotalPrice,
} from "../../redux/actionCreators/burgerConstructorActionsCreator";
import { setOrder } from "../../redux/actionTypes/burgerConstructorActions";
import EmptyElement from "./components/EmptyElement/EmptyElement";
import ConstructorItem from "./components/ConstructorItem/ConstructorItem";
import { useLocation, useNavigate } from "react-router-dom";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { bun, ingredients, totalPrice } = useSelector(
    (store) => store.burgerConstructor
  );

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

  const submitOrder = useCallback(() => {
    // if (!isUserLoggedIn) navigate("/login")
    // else {
    const orderIngredients = [
      bun._id,
      ...ingredients.map((el) => el._id),
      bun._id,
    ];
    dispatch(setOrder(orderIngredients));
    navigate("/order", { state: { background: location } });
    // }
  }, [bun, dispatch, ingredients, location, navigate]);

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
