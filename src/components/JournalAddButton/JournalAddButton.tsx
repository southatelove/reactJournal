import { CardButton } from "@/components/CardButton";
import styles from "./JournalAddButton.module.css";
import { JournalAddButtonProps } from "./JournalAddButton.props";

export const JournalAddButton = ({ clearForm }: JournalAddButtonProps) => {
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
};
