import CardButton from "../CardButton/CardButton";
import "./JournalAddButton.css";

export default function JournalAddButton() {
  return (
    <CardButton className="journal-add">
      <img src="./plus.svg"></img>
      Новое воспоминание
    </CardButton>
  );
}
