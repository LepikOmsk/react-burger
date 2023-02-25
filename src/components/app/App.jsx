import AppHeader from "../app-header/app-header";
import BurgerIngrediends from "../burger-ingredients/burger-ingredients";
import styles from "../app/app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useEffect } from "react";
import { API_URL } from "../../utils/constants";
import { checkReponse } from "../../utils/checkResponse";
import { useDispatch, useSelector } from "react-redux";
import {
  setIngredientsErrorStatus,
  setIngredientsReqestStatus,
  setIngredientsSuccessStatus,
} from "../../redux/actionCreators/ingredientsActionCreators";

function App() {
  const dispatch = useDispatch();
  const { isLoading, hasError } = useSelector((store) => store.ingredients);

  useEffect(() => {
    dispatch(setIngredientsReqestStatus());

    fetch(API_URL)
      .then((res) => checkReponse(res))
      .then((res) => dispatch(setIngredientsSuccessStatus(res.data)))
      .catch((error) => dispatch(setIngredientsErrorStatus()));
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <main className={`container ${styles.mainPage}`}>
        {isLoading ? (
          <h1>Загрузка...</h1>
        ) : hasError ? (
          <h1>Что-то пошло не так...</h1>
        ) : (
          <>
            <BurgerIngrediends />
            <BurgerConstructor />
          </>
        )}
      </main>
    </>
  );
}

export default App;
