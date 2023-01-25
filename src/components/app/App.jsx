import "./App.css";
import AppHeader from "../app-header/app-header";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerInegrediends from "../burger-ingredients/burger-ingredients";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BurgerInegrediends />
    </div>
  );
}

export default App;
