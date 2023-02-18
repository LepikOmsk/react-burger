import PropTypes from "prop-types";

const Digits = ({ number = 0, size = "default", type = "main" }) => {
  return (
    <>
      {type === "main" ? (
        <p className={`text text_type_digits-${size}`}>{number}</p>
      ) : (
        <p className={`text text_type_digits-${size} text_color_inactive`}>
          {number}
        </p>
      )}
    </>
  );
};

Digits.propTypes = {
  number: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large", "default"]),
  type: PropTypes.oneOf(["main", "inactive"]),
};

export default Digits;
