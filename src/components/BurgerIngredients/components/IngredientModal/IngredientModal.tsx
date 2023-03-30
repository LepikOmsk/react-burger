import Modal from "../../../modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const IngredientModal: React.FC = () => {
  return (
    <Modal title="Детали ингридиента">
      <IngredientDetails />
    </Modal>
  );
};

export default IngredientModal;
