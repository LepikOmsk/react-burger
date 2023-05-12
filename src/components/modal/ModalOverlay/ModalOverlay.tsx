import styles from "./ModalOverlay.module.css";

type TModalOverlay = {
  closeModal: () => void;
};

const ModalOverlay: React.FC<TModalOverlay> = ({ closeModal }) => {
  return <div className={styles.modalOverlay} onClick={closeModal}></div>;
};

export default ModalOverlay;
