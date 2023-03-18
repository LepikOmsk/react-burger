import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element, onlyUnAuth = false }) => {
  const location = useLocation();
  const isLoggedIn = useSelector((store) => store.auth.user.isLoggedIn);

  const { isLoading } = useSelector((store) => store.auth);

  if (isLoading) return <div> Загрузка... </div>;

  if (onlyUnAuth && isLoggedIn)
    return <Navigate to={location.state?.target || "/"} replace />;

  if (!onlyUnAuth && !isLoggedIn) {
    return <Navigate to="/login" state={{ target: location }} replace />;
  }

  return element;
};

export default ProtectedRoute;
