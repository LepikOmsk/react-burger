import React, { useCallback, useState } from "react";
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Redux
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/actionTypes/authActions";

// Components
import LinkWordButton from "../../components/LinkWordButton/LinkWordButton";
import Text from "../../components/Inscriptions/Text";

//Styles
import styles from "./RegisterPage.module.css";

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, name: e.target.value }));
    },
    [setForm]
  );

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, email: e.target.value }));
    },
    [setForm]
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, password: e.target.value }));
    },
    [setForm]
  );

  const submitForm = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch<any>(userRegister(form));
    },
    [dispatch, form]
  );

  return (
    <main className={`container ${styles.main}`}>
      <div className={styles.title}>
        <Text size="medium" type="main" text="Регистрация" />
      </div>

      <form className={styles.form} onSubmit={submitForm}>
        <Input
          type="text"
          placeholder="Имя"
          onChange={onChangeName}
          value={form.name}
          name="name"
          error={false}
          errorText="Ошибка"
          size="default"
          autoFocus
        />

        <EmailInput
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={onChangeEmail}
        />

        <PasswordInput
          onChange={onChangePassword}
          value={form.password}
          name={"password"}
        />

        <Button
          htmlType="submit"
          type="primary"
          size="large"
          disabled={!form.email || !form.name || !form.password}
        >
          Зарегистрироваться
        </Button>
      </form>

      <div className={styles.link}>
        <LinkWordButton
          title="Уже зарегистрированы?"
          buttonName="Войти"
          path="/login"
        />
      </div>
    </main>
  );
};

export default RegisterPage;
