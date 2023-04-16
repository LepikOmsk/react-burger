import React, { useEffect, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Components
import LinkWordButton from "../../components/LinkWordButton/LinkWordButton";
import Text from "../../components/Inscriptions/Text";

import { PASSWORD_RESET_REQUEST } from "../../utils/constants";
import {
  customFetch,
  IRequestCreator,
} from "../../utils/authUtils/customFetch";

import styles from "./ResetPasswordPage.module.css";

const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    !location?.state?.resetPassword && navigate("/forgot-password");
  }, [location.state, navigate]);

  const [form, setForm] = useState({
    password: "",
    token: "",
  });

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        password: e.target.value,
      }));
    },
    [setForm]
  );

  const onChangeCode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        token: e.target.value,
      }));
    },
    [setForm]
  );

  const submitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const request: IRequestCreator = {
        method: "POST",
        body: { ...form },
      };

      customFetch(PASSWORD_RESET_REQUEST, request)
        .then((res) => navigate("/login"))
        .catch((err) => {
          console.log("error");
        });
    },
    [form, navigate]
  );

  return (
    <main className={`container ${styles.main}`}>
      <div className={styles.title}>
        <Text size="medium" type="main" text="Восстановление пароля" />
      </div>

      <form className={styles.form} onSubmit={submitForm}>
        <PasswordInput
          onChange={onChangePassword}
          value={form.password}
          name={"password"}
          placeholder="Введите новый пароль"
          autoFocus
        />

        <Input
          type="text"
          placeholder="Введите код из письма"
          onChange={onChangeCode}
          value={form.token}
          name="name"
          error={false}
          errorText="Ошибка"
          size="default"
        />

        <Button htmlType="submit" type="primary" size="large">
          Восстановить
        </Button>
      </form>

      <div className={styles.link}>
        <LinkWordButton
          title="Вспомнили пароль?"
          buttonName="Войти"
          path="/login"
        />
      </div>
    </main>
  );
};

export default ResetPasswordPage;
