import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import LinkWordButton from "../../components/LinkWordButton/LinkWordButton";
import Text from "../../components/Inscriptions/Text";

import { PASSWORD_RESET } from "../../utils/constants";
import {
  customFetch,
  IRequestCreator,
} from "../../utils/authUtils/customFetch";

import styles from "./ForgotPasswordPage.module.css";

const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "" });

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ email: e.target.value });
    },
    []
  );

  const submitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const request: IRequestCreator = {
        method: "POST",
        body: { ...form },
      };
      customFetch(PASSWORD_RESET, request)
        .then((res) => res)
        .then(() =>
          navigate("/reset-password", {
            state: { resetPassword: true },
          })
        )
        .catch(() => {
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
        <EmailInput
          name="email"
          placeholder="Укажите e-mail"
          value={form.email}
          onChange={onChangeEmail}
          autoFocus
        />

        <Button
          htmlType="submit"
          type="primary"
          size="large"
          disabled={!form.email}
        >
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

export default ForgotPasswordPage;
