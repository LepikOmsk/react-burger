import AppHeader from "../app-header/app-header";
import BurgerIngrediends from "../burger-ingredients/burger-ingredients";
import styles from "../app/app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { React, useEffect, useState } from "react";
import { API_URL } from "../../utils/constants";

function App() {
  const [fetchIngredients, setFetchIngredients] = useState({
    ingredients: [],
    isLoading: true,
    hasError: false,
  });

  useEffect(() => {
    fetch(API_URL).then((res) => {
      if (res.ok) {
        return res.json().then((res) =>
          setFetchIngredients((prev) => ({
            ...prev,
            ingredients: res.data,
            isLoading: false,
          }))
        );
      }
      return Promise.reject(`Ошибка ${res.status}`);
    });
  }, []);

  return (
    <>
      <AppHeader />
      <main className={`container ${styles.mainPage}`}>
        {!fetchIngredients.isLoading ? (
          <>
            <BurgerIngrediends ingredients={fetchIngredients.ingredients} />
            <BurgerConstructor ingredients={fetchIngredients.ingredients} />
          </>
        ) : (
          <h1>Загрузка...</h1>
        )}
      </main>
    </>
  );
}

export default App;
