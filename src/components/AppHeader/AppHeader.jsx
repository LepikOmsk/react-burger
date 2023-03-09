import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
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
          />
          <HeaderComponent
            icon={<ListIcon type="secondary" />}
            text={"Лента заказов"}
            type={"secondary"}
          />
          <div className={styles.headerLogo}>
            <Logo />
          </div>
          <div className={styles.account}>
            <HeaderComponent
              icon={<ProfileIcon type="secondary" />}
              text={"Личный кабинет"}
              type={"secondary"}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
