import PropTypes from "prop-types";
export const API_URL = "https://norma.nomoreparties.space/api/ingredients";

export const ORDER_IMG =
  "https://stellar-burgers.web.app/static/media/orderDoneSVG.6d4020a51e6d258e72a1298282fd63a7.svg";

export const dataPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(["bun", "sauce", "main"]),
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
});
