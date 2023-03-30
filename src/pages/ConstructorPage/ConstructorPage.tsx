import { useSelector } from "../../redux/store";

//Компоненты
import BurgerIngrediends from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";

// DnD
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "./ConstructorPage.module.css";

const ConstructorPage: React.FC = () => {
  const { isLoading, hasError } = useSelector((store) => store.ingredients);

  return (
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
  );
};

export default ConstructorPage;
