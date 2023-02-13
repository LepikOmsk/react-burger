import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import headerStyles from "./header-component.module.css";

const HeaderComponent = ({ icon, text, type }) => {
  return (
    <a className={headerStyles.component} href="#">
      <div className="mr-2"> {icon} </div>
      {type === "primary" ? (
        <p className={cn("text text_type_main-default", headerStyles.text)}>
          {text}
        </p>
      ) : (
        <p
          className={cn(
            "text text_type_main-default text_color_inactive",
            headerStyles.text
          )}
        >
          {text}
        </p>
      )}
    </a>
  );
};

HeaderComponent.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default HeaderComponent;
