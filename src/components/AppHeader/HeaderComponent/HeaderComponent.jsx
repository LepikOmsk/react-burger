import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./HeaderComponent.module.css";

const HeaderComponent = ({ icon, text, type, path }) => {
  return (
    <NavLink to={path} className={styles.component}>
      <div className="mr-2"> {icon} </div>
      {type === "primary" ? (
        <p className={cn("text text_type_main-default", styles.text)}>{text}</p>
      ) : (
        <p
          className={cn(
            "text text_type_main-default text_color_inactive",
            styles.text
          )}
        >
          {text}
        </p>
      )}
    </NavLink>
  );
};

HeaderComponent.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default HeaderComponent;
