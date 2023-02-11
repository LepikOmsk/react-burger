import AppHeader from "../app-header/app-header";
import BurgerIngrediends from "../burger-ingredients/burger-ingredients";
import styles from "../app/app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import React from "react";

function App() {
  const [fetchIngredients, setFetchIngredients] = React.useState({
    ingredients: [],
    isLoading: true,
    hasError: false,
  });
  const urlData = "https://norma.nomoreparties.space/api/ingredients";

  React.useEffect(() => {
    fetch(urlData)
      .then((res) => res.json())
      .then((res) =>
        setFetchIngredients((prev) => ({
          ...prev,
          ingredients: res.data,
          isLoading: false,
        }))
      );
  }, []);

  return (
    <>
      <AppHeader />
      <main className={`container ${styles.mainPage}`}>
        {!fetchIngredients.isLoading ? (
          <>
            <BurgerIngrediends ingredients={fetchIngredients.ingredients} />
            <BurgerConstructor />
          </>
        ) : (
          <h1>Загрузка</h1>
        )}
      </main>
    </>
  );
}

export default App;
