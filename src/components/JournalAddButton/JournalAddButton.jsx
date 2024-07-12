import CardButton from "../CardButton/CardButton";
import "./JournalAddButton.css";

export default function JournalAddButton({ clearForm }) {
  return (
    <CardButton className="journal-add" onClick={clearForm} type="button">
      <img src="./plus.svg"></img>
      Новое воспоминание
    </CardButton>
  );
}
