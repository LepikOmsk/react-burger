import AppHeader from "../app-header/app-header";
import BurgerIngrediends from "../burger-ingredients/burger-ingredients";
import styles from "../app/app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  return (
    <>
      <AppHeader />
      <main className={`container ${styles.mainPage}`}>
        <BurgerIngrediends />
        <BurgerConstructor />
      </main>
    </>
  );
}

export default App;
