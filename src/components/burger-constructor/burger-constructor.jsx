import styles from "../burger-constructor/burger-constructor.module.css";
import data from "../utils/data";
import {
  DragIcon,
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import Digits from "../inscriptions/digits";

const bunTop = (
  <ConstructorElement
    isLocked={true}
    type={"top"}
    text="Краторная булка N-200i (верх)"
    price={1255}
    thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
  />
);

const main = data
  .filter((el) => el.type !== "bun")
  .map((el, i) => (
    <ConstructorElement
      text={el.name}
      price={el.price}
      thumbnail={el.image}
      key={i}
    />
  ));

const bunBottom = (
  <ConstructorElement
    isLocked={true}
    type={"bottom"}
    text="Краторная булка N-200i (низ)"
    price={1255}
    thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
  />
);

const BurgerConstructor = () => {
  return (
    <section className={styles.containerConstructor}>
      <div className={styles.burgerConstructor}>
        <div className={styles.bun}>{bunTop}</div>
        <div className={styles.ingredients}>
          <ul className={cn("custom-scroll", styles.scroll)}>
            {main.map((el) => (
              <li className={styles.item}>
                <DragIcon type="primary" />
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bun}>{bunBottom}</div>
      </div>

      <div className={styles.createOrder}>
        <div className={styles.price}>
          <Digits className="mr-5" type="medium" number={610} />
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
