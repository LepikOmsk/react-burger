import AppHeader from "../AppHeader/AppHeader";
import { Route, Routes, useLocation } from "react-router-dom";

//Страницы
import ConstructorPage from "../../pages/ConstructorPage/ConstructorPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import OrderHistoryPage from "../../pages/OrderHistoryPage/OrderHistoryPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ProfileInfo from "../../pages/ProfilePage/ProfileInfo";
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import OrderFeedPage from "../../pages/OrderFeedPage/OrderFeedPage";
import IngredientModal from "../BurgerIngredients/components/IngredientModal/IngredientModal";
import OrderDetails from "../BurgerConstructor/components/OrderDetails/OrderDetails";
import IngredientPage from "../../pages/IngredientPage/IngredientPage";

function App() {
  const location = useLocation();

  const background = location.state && location.state.background;

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        {/* Header Links */}
        <Route path="/" element={<ConstructorPage />} />
        <Route path="/order-feed" element={<OrderFeedPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="/profile/order-history" element={<OrderHistoryPage />} />
          <Route path="/profile" element={<ProfileInfo />} />
        </Route>

        {/* Ingredient Page */}
        <Route path="/ingredients/:id" element={<IngredientPage />} />

        {/* Auth Routes */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Not found page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/ingredients/:id" element={<IngredientModal />} />
          <Route path="/order" element={<OrderDetails />} />
        </Routes>
      )}
    </>
  );
}

export default App;
