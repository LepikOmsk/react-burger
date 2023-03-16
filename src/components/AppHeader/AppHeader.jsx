import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.headerNav}>
          <HeaderComponent
            icon={<BurgerIcon type="primary" />}
            text={"Конструктор"}
            type={"primary"}
            className="mr-2"
            path="/"
          />
          <HeaderComponent
            icon={<ListIcon type="secondary" />}
            text={"Лента заказов"}
            type={"secondary"}
            path="/order-history"
          />

          <Link to="/" className={styles.headerLogo}>
            <Logo />
          </Link>

          <div className={styles.account}>
            <HeaderComponent
              icon={<ProfileIcon type="secondary" />}
              text={"Личный кабинет"}
              type={"secondary"}
              path="/profile"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
