import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";

const modalRoot = document.getElementById("modal");

const Modal = ({ closeModal, children }) => {
  return ReactDOM.createPortal(
    <div
      className={`${styles.modal} ${styles.isOpen} `}
      onClick={() => closeModal(false)}
    >
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
