import React from "react";
import Text from "../../components/Inscriptions/Text";
import styles from "./NotFoundPage.module.css";
import DeadBurger from "../../images/DeadBurger.jpg";

const NotFoundPage = () => {
  return (
    <div className={styles.main}>
      <Text size="medium" type="main" text="Такой страницы не существует" />
      <img className={styles.img} src={DeadBurger} alt="Страница не найдена" />
    </div>
  );
};

export default NotFoundPage;
