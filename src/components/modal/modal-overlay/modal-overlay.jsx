import styles from "./modal-overlay.module.css";

const ModalOverlay = ({ closeModal }) => {
  return <div className={styles.modalOverlay} onClick={closeModal}></div>;
};

export default ModalOverlay;
