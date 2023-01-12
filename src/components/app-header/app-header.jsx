import {
  Logo,
  BurgerIcon,
  LockIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderComponent from "./header-component";

const AppHeader = () => {
  return (
    <header>
      <div>
        <HeaderComponent
          icon={<BurgerIcon type="primary" />}
          text={"Конструктор"}
        />
      </div>
      <Logo />
      <div>
        <HeaderComponent
          icon={<ListIcon type="primary" />}
          text={"Лента заказов"}
        />
      </div>
    </header>
  );
};

export default AppHeader;
