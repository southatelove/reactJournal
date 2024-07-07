import styles from "./JournalForm.module.css";
import cn from "classnames";
import Button from "../Button/Button";
import { useEffect, useReducer, useRef } from "react";
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
  const titleRef = useRef();
  const dateRef = useRef();
  const postRef = useRef();

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.post:
        postRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.post || !isValid.title) {
      console.log(isValid, "isValid");
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
          ref={titleRef}
          type="text"
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
          ref={dateRef}
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
        ref={postRef}
        id=""
        name="post"
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
