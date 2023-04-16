import React, { useCallback, useEffect, PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { TUseLocation } from "../../utils/types/locationType";

import ModalOverlay from "./ModalOverlay/ModalOverlay";
import Portal from "../Portal/Portal";

import styles from "./Modal.module.css";

type TModal = {
  title?: string;
  titleSize?: "small" | "medium";
};

const Modal: React.FC<PropsWithChildren<TModal>> = ({
  title,
  titleSize = "medium",
  children,
}) => {
  const location: TUseLocation = useLocation();

  //Функция закрытия модального окна
  const navigate = useNavigate();

  const closeModal = useCallback(() => {
    if (location.state?.background) navigate(location.state.background);
  }, [location.state, navigate]);

  // Закрытие по нажатию на Esc
  useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === "Escape") {
        closeModal();
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, [closeModal]);

  return (
    <Portal>
      <div className={styles.modal}>
        <div className={styles.header}>
          {!!title && (
            <h2 className={cn(styles.title, styles[`title_${titleSize}`])}>
              {title}
            </h2>
          )}

          <button className={styles.closeButton} onClick={closeModal}>
            <CloseIcon type="primary" />
          </button>
        </div>

        <div className={styles.modal_content}>{children}</div>
      </div>

      <ModalOverlay closeModal={closeModal} />
    </Portal>
  );
};

export default Modal;
