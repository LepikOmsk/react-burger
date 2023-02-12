import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./modal-overlay/modal-overlay.jsx";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("modal");

const Modal = ({ closeModal, children, title }) => {
  const headingTitle = (
    <p className={`text text_type_main-large ${styles.title}`}>{title}</p>
  );

  React.useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeModal();
      }
    });
    return () => {
      document.removeEventListener("keydown", closeModal);
    };
  });

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
