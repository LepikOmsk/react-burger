import Modal from "../../../modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

import styles from "./IngredientModal.module.css";

const IngredientModal: React.FC = () => {
  return (
    <Modal title="Детали ингридиента">
      <div className={styles.container}>
        <IngredientDetails />
      </div>
    </Modal>
  );
};

export default IngredientModal;
