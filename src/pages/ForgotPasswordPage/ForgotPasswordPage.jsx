import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Utils
// import { forgotPassword } from 'utils/auth/forgotPassword'

// Components
import LinkWordButton from "../../components/LinkWordButton/LinkWordButton";
import Text from "../../components/Inscriptions/Text";

//Styles
import styles from "./ForgotPasswordPage.module.css";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({ email: "" });

  const onChangeEmail = React.useCallback((e) => {
    setForm({ email: e.target.value });
  }, []);

  // Submit form
  // const submitForm = React.useCallback(
  //   (e: React.FormEvent) => {
  //     e.preventDefault()

  //     forgotPassword(form)
  //       .then(() =>
  //         navigate(RESET_PASSWORD_LINK, {
  //           state: { resetPassword: true },
  //         }),
  //       )
  //       .catch((err) => {
  //         console.log('error')
  //       })
  //   },
  //   [form, navigate],
  // )

  return (
    <main className={`container ${styles.main}`}>
      <div className={styles.title}>
        <Text size="medium" type="main" text="Восстановление пароля" />
      </div>

      <form className={styles.form} onSubmit={""}>
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
