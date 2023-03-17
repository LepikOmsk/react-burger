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

function App() {
  // const location = useLocation();
  return (
    <>
      <AppHeader />
      <Routes>
        {/* Header Links */}
        <Route path="/" element={<ConstructorPage />} />
        <Route path="/order-feed" element={<OrderFeedPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="/profile/order-history" element={<OrderHistoryPage />} />
          <Route path="/profile" element={<ProfileInfo />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Not found page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
