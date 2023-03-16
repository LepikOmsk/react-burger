import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Text from "../Inscriptions/Text";

// Styles
import styles from "./LinkWordButton.module.css";

const LinkWordButton = ({ title, buttonName, path }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <Text type="inactive" size="default" text={title} />

      <Button
        htmlType="button"
        type="secondary"
        size="large"
        extraClass={styles.button}
        onClick={() => navigate(path)}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default LinkWordButton;
