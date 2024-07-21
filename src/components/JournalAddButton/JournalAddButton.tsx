import CardButton from "../CardButton/CardButton";
import styles from "./JournalAddButton.module.css";

export default function JournalAddButton({ clearForm }) {
  return (
    <CardButton
      className={styles["journal-add"]}
      onClick={clearForm}
      type="button"
    >
      <img src="./plus.svg" />
      Новое воспоминание
    </CardButton>
  );
}
