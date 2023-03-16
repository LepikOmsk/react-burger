import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";

// Redux
// import { useDispatch, useSelector } from 'redux/store'
// import { authUserSelector } from 'redux/selectors'
// import { setUser } from 'redux/actions/authActions'

// Styles
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  // const dispatch = useDispatch()
  // const { name, email } = useSelector(authUserSelector)

  // Form state
  const formInitial = {
    name: "",
    email: "",
    password: "",
  };

  const [form, setForm] = useState(formInitial);

  // Display buttons
  const isEdit = React.useMemo(
    () => form.name !== "" || form.email !== "" || !!form.password,
    [form]
  );

  // Name input function
  const onChangeName = (e) => {
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  // Email input function
  const onChangeEmail = (e) => {
    setForm((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  // Password input function
  const onChangePassword = (e) => {
    setForm((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  // Cancel function
  const handleCancelButton = () => {
    setForm(formInitial);
  };

  // Submit function
  // const submitForm = (e) => {
  //   e.preventDefault()

  //   dispatch(setUser(form))
  // }

  return (
    <form className={styles.main} onSubmit={""}>
      <Input
        type="text"
        placeholder="Имя"
        onChange={onChangeName}
        value={form.name}
        name="name"
        error={false}
        errorText="Ошибка"
        size="default"
        icon="EditIcon"
      />

      <EmailInput
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={onChangeEmail}
        isIcon
      />

      <PasswordInput
        onChange={onChangePassword}
        value={form.password}
        name={"password"}
        icon="EditIcon"
      />

      {isEdit && (
        <div className={styles.buttons}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={handleCancelButton}
          >
            Отмена
          </Button>

          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
};

export default React.memo(ProfileInfo);
