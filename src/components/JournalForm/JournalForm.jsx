import styles from "./JournalForm.module.css";
import { useState, useEffect } from "react";
import cn from "classnames";
import Button from "../Button/Button";

const INITIAL_STATE = {
  title: true,
  post: true,
  date: true,
};

export default function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState(INITIAL_STATE);

  useEffect(() => {
    let timerId;
    if (!formValidState.date || !formValidState.post || !formValidState.title) {
      timerId = setTimeout(() => {
        setFormValidState(INITIAL_STATE);
        console.log("очистка");
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [formValidState]);

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log(formProps, "formProps");
    // проверка на валидацию формы перед отправкой

    let isFormValid = true;
    if (formProps.title?.trim().length == 0) {
      setFormValidState((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, title: true }));
    }
    if (!formProps.date) {
      setFormValidState((prev) => ({ ...prev, date: false }));
      isFormValid = false;
    } else {
      setFormValidState((prev) => ({ ...prev, date: true }));
    }
    if (formProps.post?.trim().length == 0) {
      setFormValidState((prev) => ({ ...prev, post: false }));
      isFormValid = false;
    } else {
      setFormValidState((prev) => ({ ...prev, post: true }));
    }

    if (!isFormValid) {
      return;
    }

    onSubmit(formProps);
  };

  return (
    <form className={`${styles["journal-form"]}`} onSubmit={addJournalItem}>
      <div>
        <input
          type="title"
          name="title"
          className={cn(styles["input-title"], {
            [styles["invalid"]]: !formValidState.title,
          })}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="date" className={styles["form-label"]}>
          <img src="./date.svg" alt="Иконка календаря"></img>
          <span>Дата</span>
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className={cn(styles["input"], {
            [styles["invalid"]]: !formValidState.date,
          })}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="tag" className={styles["form-label"]}>
          <img src="./folder.svg" alt="Иконка папки"></img>
          <span>Метки</span>
        </label>
        <input type="text" name="tag" id="tag" className={styles["input"]} />
      </div>

      <textarea
        name="post"
        id=""
        cols="30"
        rows="10"
        className={cn(styles["input"], {
          [styles["invalid"]]: !formValidState.post,
        })}
      ></textarea>
      <Button text={"Сохранить"} />
    </form>
  );
}
