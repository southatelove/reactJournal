import styles from "./JournalForm.module.css";
import { useEffect, useReducer } from "react";
import cn from "classnames";
import Button from "../Button/Button";
import { INITIAL_STATE, formReducer } from "./JournalForm.state";

// const INITIAL_STATE = {
//   title: true,
//   post: true,
//   date: true,
// };

export default function JournalForm({ onSubmit }) {
  // const [formValidState, setFormValidState] = useState(INITIAL_STATE);

  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);

  const { isValid, isFormReadyToSubmit, values } = formState;

  useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.post || !isValid.title) {
      timerId = setTimeout(() => {
        dispatchForm({ type: "RESET_VALIDITY" });
        console.log("очистка");
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
    }
  }, [isFormReadyToSubmit, onSubmit, values]);

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  const onChange = (e) => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <form className={`${styles["journal-form"]}`} onSubmit={addJournalItem}>
      <div>
        <input
          type="title"
          name="title"
          className={cn(styles["input-title"], {
            [styles["invalid"]]: !isValid.title,
          })}
          value={values.title}
          onChange={onChange}
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
            [styles["invalid"]]: !isValid.date,
          })}
          value={values.date}
          onChange={onChange}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="tag" className={styles["form-label"]}>
          <img src="./folder.svg" alt="Иконка папки"></img>
          <span>Метки</span>
        </label>
        <input
          type="text"
          name="tag"
          id="tag"
          className={styles["input"]}
          value={values.tag}
          onChange={onChange}
        />
      </div>
      <textarea
        name="post"
        id=""
        cols="30"
        rows="10"
        className={cn(styles["input"], {
          [styles["invalid"]]: !isValid.post,
        })}
        value={values.post}
        onChange={onChange}
      ></textarea>
      <Button text={"Сохранить"} />
    </form>
  );
}
