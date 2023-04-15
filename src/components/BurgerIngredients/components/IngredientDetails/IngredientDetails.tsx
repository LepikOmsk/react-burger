import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../../redux/store";
import { useParams } from "react-router-dom";

import Digits from "../../../Inscriptions/Digits";
import Text from "../../../Inscriptions/Text";
import { TIngredient } from "../../../../utils/types/ingredientType";

import {
  resetIngredientDetails,
  setIngredientDetails,
} from "../../../../redux/actionCreators/currentIngredientActionCreator";

import styles from "../IngredientDetails/IngredientDetails.module.css";

const IngredientDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const ingredient = useSelector((store) => store.ingredients.data)?.find(
    (el: TIngredient) => el._id === id
  );

  const { isLoading, hasError } = useSelector((store) => store.ingredients);

  useEffect(() => {
    ingredient && dispatch(setIngredientDetails(ingredient));
    return () => {
      dispatch(resetIngredientDetails());
    };
  }, [ingredient, dispatch]);

  return (
    <div className={styles.main}>
      {isLoading ? (
        <h2>Загрузка...</h2>
      ) : hasError || !ingredient ? (
        <h2>Что-то пошло не так...</h2>
      ) : (
        <>
          <img
            className={styles.img}
            src={ingredient.image}
            alt={ingredient.name}
          />
          <div className={styles.title}>
            <Text size="medium" type="main" text={ingredient.name} />
          </div>
          <ul className={styles.nutrients}>
            <li className={styles.nutrientsItem}>
              <Text size="default" type="inactive" text="Калории,ккал" />
              <Digits
                size="default"
                type="inactive"
                number={ingredient.calories}
              />
            </li>
            <li className={styles.nutrientsItem}>
              <Text size="default" type="inactive" text="Белки, г" />
              <Digits
                size="default"
                type="inactive"
                number={ingredient.proteins}
              />
            </li>
            <li className={styles.nutrientsItem}>
              <Text size="default" type="inactive" text="Жиры, г" />
              <Digits size="default" type="inactive" number={ingredient.fat} />
            </li>
            <li className={styles.nutrientsItem}>
              <Text size="default" type="inactive" text="Углеводы, г" />
              <Digits
                size="default"
                type="inactive"
                number={ingredient.carbohydrates}
              />
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default IngredientDetails;
