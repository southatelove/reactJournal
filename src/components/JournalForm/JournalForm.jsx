import "./JournalForm.css";
import { useState } from "react";

import Button from "../Button/Button";

export default function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    text: true,
    date: true,
  });
  console.log(formValidState);

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    // проверка на валидацию формы
    if (!formProps.title.trim().length == 0) {
      setFormValidState((prev) => ({ ...prev, title: false }));
    }
    if (!formProps.text.trim().length == 0) {
      setFormValidState((prev) => ({ ...prev, text: false }));
    }
    if (!formProps.date) {
      setFormValidState((prev) => ({ ...prev, date: false }));
    }

    onSubmit(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="title" name="title"></input>
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="post" id="" cols="30" rows="10"></textarea>
      <Button text={"Сохранить"} />
    </form>
  );
}
