import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AppHeader from "../app-header/app-header";
import BurgerIngrediends from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { checkReponse } from "../../utils/checkResponse";
import {
  setIngredientsErrorStatus,
  setIngredientsRequestStatus,
  setIngredientsSuccessStatus,
} from "../../redux/actionCreators/ingredientsActionCreators";
import { INGREDIENTS_URL } from "../../utils/constants";
// DnD
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "../app/app.module.css";

function App() {
  const dispatch = useDispatch();
  const { isLoading, hasError } = useSelector((store) => store.ingredients);

  useEffect(() => {
    dispatch(setIngredientsRequestStatus());

    fetch(INGREDIENTS_URL)
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
            <DndProvider backend={HTML5Backend}>
              <BurgerIngrediends />
              <BurgerConstructor />
            </DndProvider>
          </>
        )}
      </main>
    </>
  );
}

export default App;
