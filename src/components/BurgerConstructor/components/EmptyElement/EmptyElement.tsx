import Text from "../../../Inscriptions/Text";
import styles from "../EmptyElement/EmptyElement.module.css";

type TEmptyElement = {
  position?: "bottom" | "top";
  title: string;
};

const EmptyElement: React.FC<TEmptyElement> = ({ position, title }) => {
  return (
    <div className={`${styles.container}	${position ? styles[position] : ""}`}>
      <Text text={title} size="default" type="main" />
    </div>
  );
};

export default EmptyElement;
