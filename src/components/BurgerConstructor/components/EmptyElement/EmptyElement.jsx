import Text from "../../../Inscriptions/Text";
import styles from "../EmptyElement/EmptyElement.module.css";

const EmptyElement = ({ position, title }) => {
  return (
    <div
      className={`
				${styles.container}
				${position ? styles[position] : ""}
			`}
    >
      <Text text={title} size="default" type="main" />
    </div>
  );
};

export default EmptyElement;
