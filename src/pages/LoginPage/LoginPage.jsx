import React from "react";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import LinkWordButton from "../../components/LinkWordButton/LinkWordButton";

// Redux
import { useDispatch } from "react-redux";

// import { handleLogin } from 'redux/actions'

import styles from "./LoginPage.module.css";
import Text from "../../components/Inscriptions/Text";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const onChangeEmail = React.useCallback(
    (e) => {
      setLogin((prev) => ({ ...prev, email: e.target.value }));
    },
    [setLogin]
  );

  const onChangePassword = React.useCallback(
    (e) => {
      setLogin((prev) => ({ ...prev, password: e.target.value }));
    },
    [setLogin]
  );

  // Submit form
  // const submitForm = React.useCallback(
  //   (e: React.FormEvent) => {
  //     e.preventDefault()

  //     dispatch(handleLogin(loginForm))
  //   },
  //   [dispatch, loginForm],
  // )

  return (
    <main className={`container ${styles.main}`}>
      <div className={styles.title}>
        <Text size="medium" type="main" text="Вход" />
      </div>

      <form className={styles.form} onSubmit={""}>
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
