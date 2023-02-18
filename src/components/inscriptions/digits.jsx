import PropTypes from "prop-types";

const Digits = ({ number, type }) => {
  switch (type) {
    case "medium":
      return <p className="text text_type_digits-medium">{number}</p>;
    case "large":
      return <p className="text text_type_digits-large">{number}</p>;
    default:
      return <p className="text text_type_digits-default">{number}</p>;
  }
};

Digits.propTypes = {
  text: PropTypes.number,
  type: PropTypes.string,
};

export default Digits;
