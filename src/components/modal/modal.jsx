import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "./ModalOverlay/ModalOverlay.jsx";

import styles from "./Modal.module.css";

const Modal = ({ children, title }) => {
  const location = useLocation();

  const headingTitle = (
    <p className={`text text_type_main-large ${styles.title}`}>{title}</p>
  );

  //Функция закрытия модального окна
  const navigate = useNavigate();

  const closeModal = useCallback(() => {
    location?.state?.background && navigate(location.state.background);
  }, [location.state, navigate]);

  // Закрытие по нажатию на Esc
  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeModal();
      }
    });
    return () => {
      document.removeEventListener("keydown", closeModal);
    };
  });

  const modalRoot = React.useMemo(() => document.getElementById("modal"), []);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div onClick={(e) => e.stopPropagation()} className={styles.modalContainer}>
      <div className={`${styles.modal} ${title ? styles.modalWithHeader : ""}`}>
        <div className={styles.header}>
          {title && headingTitle}
          <button className={styles.closeButton}>
            <CloseIcon type="primary" onClick={closeModal} />
          </button>
        </div>
        <div className={styles.modal_content}>{children}</div>
      </div>
      <ModalOverlay closeModal={closeModal} />
    </div>,
    modalRoot
  );
};

export default Modal;
