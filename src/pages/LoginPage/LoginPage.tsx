import React, { useState, useCallback } from "react";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

//Components
import LinkWordButton from "../../components/LinkWordButton/LinkWordButton";
import Text from "../../components/Inscriptions/Text";

// Redux

import { userLogin } from "../../redux/actionTypes/authActions";

import styles from "./LoginPage.module.css";
import { useDispatch } from "../../redux/store";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLogin((prev) => ({ ...prev, email: e.target.value }));
    },
    [setLogin]
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLogin((prev) => ({ ...prev, password: e.target.value }));
    },
    [setLogin]
  );

  const submitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      dispatch(userLogin(login));
    },
    [dispatch, login]
  );

  return (
    <main className={`container ${styles.main}`}>
      <div className={styles.title}>
        <Text size="medium" type="main" text="Вход" />
      </div>

      <form className={styles.form} onSubmit={submitForm}>
        <EmailInput
          name="email"
          placeholder="E-mail"
          value={login.email}
          onChange={onChangeEmail}
          autoFocus
        />

        <PasswordInput
          onChange={onChangePassword}
          value={login.password}
          name={"password"}
        />

        <Button
          htmlType="submit"
          type="primary"
          size="large"
          disabled={!login.email || !login.password}
        >
          Войти
        </Button>
      </form>

      <div className={styles.link}>
        <LinkWordButton
          title="Вы — новый пользователь?"
          buttonName="Зарегистрироваться"
          path="/register"
        />
        <LinkWordButton
          title="Забыли пароль?"
          buttonName="Восстановить пароль"
          path="/forgot-password"
        />
      </div>
    </main>
  );
};

export default LoginPage;
