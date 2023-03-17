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
          <HeaderComponent icon={<BurgerIcon />} text="Конструктор" path="/" />
          <HeaderComponent
            icon={<ListIcon />}
            text="Лента заказов"
            path="/order-feed"
          />

          <Link to="/" className={styles.headerLogo}>
            <Logo />
          </Link>

          <div className={styles.account}>
            <HeaderComponent
              icon={<ProfileIcon />}
              text="Личный кабинет"
              path="/profile"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
