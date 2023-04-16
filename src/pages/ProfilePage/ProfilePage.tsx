import React, { useCallback } from "react";
import { NavLink, Outlet } from "react-router-dom";

import Text from "../../components/Inscriptions/Text";

// Redux
import { useDispatch } from "../../redux/store";
import { userLogout } from "../../redux/actionTypes/authActions";

// Styles
import styles from "./ProfilePage.module.css";

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();

  const className = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      `${styles.link} ${isActive ? styles.active : ""}`,
    []
  );

  const logout = () => dispatch(userLogout());

  return (
    <main className={`container ${styles.main}`}>
      <aside className={styles.aside}>
        <div className={styles.buttons}>
          <NavLink className={className} to="/profile" end>
            <Text size="medium" type="main" text="Профиль" />
          </NavLink>

          <NavLink className={className} to="/profile/orders" end>
            <Text size="medium" type="main" text="История заказов" />
          </NavLink>

          <button className={styles.link} onClick={logout}>
            <Text size="medium" type="main" text="Выход" />
          </button>
        </div>

        <Text
          size="default"
          type="inactive"
          text="В этом разделе вы можете изменить свои персональные данные"
        />
      </aside>

      <Outlet />
    </main>
  );
};

export default ProfilePage;
