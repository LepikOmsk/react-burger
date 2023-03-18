import React, { useCallback } from "react";
import { NavLink, Outlet } from "react-router-dom";

import Text from "../../components/Inscriptions/Text";

// Redux
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/actionTypes/authActions";

// Styles
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const className = useCallback(
    ({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`,
    []
  );

  const logout = React.useCallback(() => {
    dispatch(userLogout());
  }, [dispatch]);

  return (
    <main className={`container ${styles.main}`}>
      <aside className={styles.aside}>
        <div className={styles.buttons}>
          <NavLink className={className} to="/profile" end>
            <Text size="medium" type="main" text="Профиль" />
          </NavLink>

          <NavLink className={className} to="/profile/order-history" end>
            <Text size="medium" type="main" text="История заказов" />
          </NavLink>

          <button className={styles.link} onClick={logout}>
            <Text size="medium" type="main" text="Выход" />
          </button>
        </div>

        <Text
          size="small"
          type="inactive"
          text="В этом разделе вы можете изменить свои персональные данные"
        />
      </aside>

      <Outlet />
    </main>
  );
};

export default ProfilePage;
