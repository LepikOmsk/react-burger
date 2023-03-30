import { TIconProps } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";
import { NavLink } from "react-router-dom";

import styles from "./HeaderComponent.module.css";

type THeaderComponent = {
  icon: React.ReactElement<TIconProps>;
  text: string;
  path: string;
};

const HeaderComponent: React.FC<THeaderComponent> = ({ icon, text, path }) => {
  const className = ({ isActive }: { isActive: boolean }) => {
    return `${styles.component} ${isActive ? styles.active : ""}`;
  };

  return (
    <NavLink to={path} className={className}>
      {icon}
      <p className="text text_type_main-default">{text}</p>
    </NavLink>
  );
};

export default HeaderComponent;
