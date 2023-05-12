import React, { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";

// Redux
import { useSelector } from "../../redux/store";

type TProtectedRoute = {
  element: ReactElement;
  onlyUnAuth?: boolean;
};

const ProtectedRoute: React.FC<TProtectedRoute> = ({
  element,
  onlyUnAuth = false,
}) => {
  const location = useLocation();
  const isLoggedIn = useSelector((store) => store.auth.user);

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
