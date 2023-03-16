import AppHeader from "../AppHeader/AppHeader";
import { Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<ConstructorPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile" element={<ProfileInfo />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
