import styles from "./JournalForm.module.css";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";

import { useContext, useEffect, useReducer, useRef } from "react";
import { INITIAL_STATE, formReducer } from "./JournalForm.state";

import { UserContext } from "@/context/index";
import { JournalFormProps } from "./JournalForm.props";
import { isValidForm } from "@/interfaces/index";

export const JournalForm = ({
  onSubmit,
  onDelete,
  selectedItem,
}: JournalFormProps) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef<HTMLInputElement | null>(null);
  const dateRef = useRef<HTMLInputElement | null>(null);
  const postRef = useRef<HTMLTextAreaElement | null>(null);

  const { userId } = useContext(UserContext);

  const focusError = (isValid: isValidForm) => {
    switch (true) {
      case !isValid.title:
        titleRef.current?.focus();
        break;
      case !isValid.date:
        dateRef.current?.focus();
        break;
      case !isValid.post:
        postRef.current?.focus();
        break;
    }
  };

  useEffect(() => {
    if (!selectedItem) {
      dispatchForm({ type: "RESET_FIELDS" });
      dispatchForm({ type: "SET_VALUE", payload: { userId: userId } });
    }

    dispatchForm({ type: "SET_VALUE", payload: { ...selectedItem } });
  }, [selectedItem]);

  useEffect(() => {
    let timerId: number;
    if (!isValid.date || !isValid.post || !isValid.title) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({ type: "RESET_VALIDITY" });
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: "RESET_FIELDS" });
      dispatchForm({ type: "SET_VALUE", payload: { userId } });
    }
  }, [isFormReadyToSubmit, onSubmit, values, userId]);

  useEffect(() => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { userId: userId },
    });
  }, [userId]);

  const addJournalItem = (e: React.FormEvent) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const deleteJournalItem = (id: number) => {
    onDelete(id);
    dispatchForm({ type: "RESET_FIELDS" });
    dispatchForm({ type: "SET_VALUE", payload: { userId: userId } });
  };

  return (
    <form className={`${styles["journal-form"]}`} onSubmit={addJournalItem}>
      <div className={styles["form-row"]}>
        <Input
          ref={titleRef}
          type="text"
          name="title"
          value={values.title}
          onChange={onChange}
          appereance="title"
          isValid={isValid.title}
        />
        {selectedItem?.id && (
          <img
            className={styles.delete}
            src="./remove.svg"
            alt="кнопка удалить"
            onClick={() => deleteJournalItem(selectedItem.id)}
          />
        )}
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="date" className={styles["form-label"]}>
          <img src="./date.svg" alt="Иконка календаря" />
          <span>Дата</span>
        </label>
        <Input
          ref={dateRef}
          type="date"
          name="date"
          id="date"
          // value={values.date ? values.date : ""}
          value={
            values.date ? new Date(values.date).toISOString().slice(0, 10) : ""
          }
          onChange={onChange}
          isValid={isValid.date}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="tag" className={styles["form-label"]}>
          <img src="./folder.svg" alt="Иконка папки"></img>
          <span>Метки</span>
        </label>
        <Input
          type="text"
          name="tag"
          id="tag"
          value={values.tag}
          onChange={onChange}
          isValid={isValid.tag}
        />
      </div>
      <TextArea
        ref={postRef}
        id=""
        name="post"
        value={values.post}
        onChange={onChange}
        isValid={isValid.post}
        cols={30}
        rows={10}
      />
      <Button>Сохранить</Button>
    </form>
  );
};
