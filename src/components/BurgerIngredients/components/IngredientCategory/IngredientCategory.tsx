import { TIngredient } from "../../../../utils/types/ingredientType";
import Text from "../../../Inscriptions/Text";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from "../IngredientCategory/IngredientCategory.module.css";

type TIngredientCategory = {
  text: string;
  category: TIngredient[];
};

const IngredientCategory: React.FC<TIngredientCategory> = ({
  text,
  category,
}) => {
  return (
    <>
      <div className={styles.title}>
        <Text size="medium" type="main" text={text} />
      </div>
      <div className={styles.categoryContainer}>
        {category.map((el) => (
          <IngredientCard key={el._id} ingredient={el} />
        ))}
      </div>
    </>
  );
};

export default IngredientCategory;
