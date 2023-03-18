import PropTypes from "prop-types";

export const BASE_URL = "https://norma.nomoreparties.space/api/";
export const INGREDIENTS_URL = `${BASE_URL}ingredients`;
export const ORDER_URL = `${BASE_URL}orders`;
export const PASSWORD_RESET = `${BASE_URL}password-reset/`;
export const PASSWORD_RESET_REQUEST = `${BASE_URL}password-reset/reset/`;

//API Auth
export const AUTH_USER = `${BASE_URL}auth/user`;
export const AUTH_REGISTER = `${BASE_URL}auth/register`;
export const AUTH_LOGIN = `${BASE_URL}auth/login`;
export const AUTH_LOGOUT = `${BASE_URL}auth/logout`;
export const AUTH_TOKEN = `${BASE_URL}auth/token`;

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
