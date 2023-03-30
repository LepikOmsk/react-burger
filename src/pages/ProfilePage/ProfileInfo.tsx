import React, { useState, useMemo } from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Redux
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/store";
import { setUser } from "../../redux/actionTypes/authActions";

// Styles
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  const dispatch = useDispatch();

  const { name, email } = useSelector((store) => store.auth.user);

  const formInitial = {
    name,
    email,
    password: "",
  };

  const [form, setForm] = useState(formInitial);

  const isEdit = useMemo(
    () => form.name !== name || form.email !== email || !!form.password,
    [name, email, form]
  );

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  const cancelButton = () => {
    setForm(formInitial);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch<any>(setUser(form));
  };

  return (
    <form className={styles.main} onSubmit={submitForm}>
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
            onClick={cancelButton}
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
