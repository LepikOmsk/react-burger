import styles from "../BurgerConstructor/BurgerConstructor.module.css";
import { useMemo, useCallback } from "react";

import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "../../redux/store";

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
} from "../../redux/actionCreators/burgerConstructorActionsCreator";
import { setOrder } from "../../redux/actionTypes/orderDetailsActions";

import EmptyElement from "./components/EmptyElement/EmptyElement";
import ConstructorItem from "./components/ConstructorItem/ConstructorItem";
import { useLocation, useNavigate } from "react-router-dom";
import { TIngredient } from "../../utils/types/ingredientType";

const BurgerConstructor: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { bun, ingredients } = useSelector((store) => store.burgerConstructor);

  const totalPrice = useMemo(() => {
    const bunPrice = bun ? bun.price * 2 : 0;
    const ingredientsPrice = ingredients
      ? ingredients.reduce((sum, x) => sum + x.price, 0)
      : 0;

    return bunPrice + ingredientsPrice;
  }, [bun, ingredients]);

  const isUserLoggedIn = useSelector((store) => store.auth.user.isLoggedIn);

  //DnD
  const [{ isHover }, dropTargerRef] = useDrop({
    accept: "ingredient",
    drop(item: TIngredient) {
      if (item) {
        item.type === "bun"
          ? dispatch(setBun(item))
          : dispatch(setIngredient({ ...item, uuid: crypto.randomUUID() }));
      }
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const submitOrder = useCallback(() => {
    if (!isUserLoggedIn) navigate("/login");
    else {
      if (bun && ingredients) {
        let orderIngredients = [
          bun._id,
          ...ingredients.map((el) => el._id),
          bun._id,
        ];
        dispatch(setOrder(orderIngredients));
        navigate("/order", { state: { background: location } });
      }
    }
  }, [bun, dispatch, ingredients, isUserLoggedIn, location, navigate]);

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
          {ingredients ? (
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
          disabled={!bun || !ingredients}
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

export default BurgerConstructor;
