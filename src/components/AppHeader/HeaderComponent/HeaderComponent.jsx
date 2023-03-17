import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./HeaderComponent.module.css";

const HeaderComponent = ({ icon, text, path }) => {
  const className = ({ isActive }) => {
    return `${styles.component} ${isActive ? styles.active : ""}`;
  };

  return (
    <NavLink to={path} className={className}>
      {icon}
      <p className="text text_type_main-default">{text}</p>
    </NavLink>
  );
};

HeaderComponent.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default HeaderComponent;
