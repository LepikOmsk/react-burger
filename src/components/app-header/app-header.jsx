import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderComponent from "./header-component/header-component";
import styles from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerNav}>
        <div className={styles.headerButton}>
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
        </div>
        <div className={styles.headerLogo}>
          <Logo />
        </div>
        <HeaderComponent
          icon={<ProfileIcon type="secondary" />}
          text={"Личный кабинет"}
          type={"secondary"}
        />
      </nav>
    </header>
  );
};

export default AppHeader;
