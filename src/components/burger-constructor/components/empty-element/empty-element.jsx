import Text from "../../../inscriptions/text";
import styles from "../empty-element/empty-element.module.css";

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
