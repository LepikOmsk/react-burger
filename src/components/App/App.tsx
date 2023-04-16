import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//Redux
import { useDispatch } from "../../redux/store";
import { getUser } from "../../redux/actionTypes/authActions";
import { getIngredients } from "../../redux/actionTypes/ingredientsActions";

//Компоненты
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AppHeader from "../AppHeader/AppHeader";
import OrderModal from "../BurgerConstructor/components/OrderModal/OrderModal";
import IngredientModal from "../BurgerIngredients/components/IngredientModal/IngredientModal";
import OrderDetailsModal from "../OrderDetails/components/OrderDetailsModal/OrderDetailsModal";

//Типы
import { TUseLocation } from "../../utils/types/locationType";

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
import IngredientPage from "../../pages/IngredientPage/IngredientPage";
import FeedPage from "../../pages/FeedPage/FeedPage";
import OrderPage from "../../pages/OrderPage/OrderPage";

const App: React.FC = () => {
  const location: TUseLocation = useLocation();
  const dispatch = useDispatch();

  const background = location.state && location.state.background;

  React.useEffect(() => {
    dispatch(getUser());
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        {/* Header Links */}
        <Route path="/" element={<ConstructorPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<ProfilePage />} />}
        >
          <Route path="/profile/orders" element={<OrderHistoryPage />} />
          <Route path="/profile" element={<ProfileInfo />} />
        </Route>

        {/* Ingredient Page */}
        <Route path="/ingredients/:id" element={<IngredientPage />} />

        {/* Order Page */}
        <Route path="/profile/:id" element={<OrderPage />} />
        <Route path="/feed/:id" element={<OrderPage />} />

        {/* Auth Routes */}
        <Route
          path="/register"
          element={<ProtectedRoute onlyUnAuth element={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<ProtectedRoute onlyUnAuth element={<LoginPage />} />}
        />
        <Route
          path="/forgot-password"
          element={
            <ProtectedRoute onlyUnAuth element={<ForgotPasswordPage />} />
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRoute onlyUnAuth element={<ResetPasswordPage />} />
          }
        />

        {/* Not found page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/ingredients/:id" element={<IngredientModal />} />
          <Route path="/order" element={<OrderModal />} />
          <Route path="/profile/:id" element={<OrderDetailsModal />} />
          <Route path="/feed/:id" element={<OrderDetailsModal />} />
        </Routes>
      )}
    </>
  );
};

export default App;
