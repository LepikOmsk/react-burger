import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Text from "../../../inscriptions/text";
import Digits from "../../../inscriptions/digits";

const IngredientCard = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt={data.name} />
      <div
        style={{ display: "flex", justifyContent: "center", columnGap: "4px" }}
      >
        <Digits className="mr-5" type="default" number={data.price} />
        <CurrencyIcon type="primary" />
      </div>
      <Text type="small" text={data.name} />
    </div>
  );
};

export default IngredientCard;
