import "./JournalForm.css";
import { useState } from "react";

import Button from "../Button/Button";

export default function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    post: true,
    date: true,
  });
  console.log(formValidState);

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

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
    <form className="journal-form" onSubmit={addJournalItem}>
      <input
        type="title"
        name="title"
        style={{ border: formValidState.title ? "" : "1px solid red" }}
      />
      <input
        type="date"
        name="date"
        style={{ border: formValidState.date ? "" : "1px solid red" }}
      />
      <input type="text" name="text" />
      <textarea
        name="post"
        id=""
        cols="30"
        rows="10"
        style={{ border: formValidState.post ? "" : "1px solid red" }}
      ></textarea>
      <Button text={"Сохранить"} />
    </form>
  );
}
