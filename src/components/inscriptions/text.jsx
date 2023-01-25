import PropTypes from "prop-types";

const Text = ({ text, type }) => {
  switch (type) {
    case "small":
      return <p className="text text_type_main-small">{text}</p>;
    case "medium":
      return <p className="text text_type_main-medium">{text}</p>;
    case "large":
      return <p className="text text_type_main-large">{text}</p>;
    default:
      return <p className="text text_type_main-default">{text}</p>;
  }
};

Text.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Text;
