import PropTypes from "prop-types";

const Text = ({ text, type, size }) => {
  return (
    <>
      {type === "main" ? (
        <p className={`text text_type_main-${size}`}>{text}</p>
      ) : (
        <p className={`text text_type_main-${size} text_color_inactive`}>
          {text}
        </p>
      )}
    </>
  );
};

Text.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large", "default"]),
  type: PropTypes.oneOf(["main", "inactive"]),
};

export default Text;
