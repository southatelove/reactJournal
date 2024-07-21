import { JournalList } from "../../interfaces/journalList.interface";
import styles from "./JournalItem.module.css";

export default function JournalItem({
  title,
  post,
  date,
}: Omit<JournalList, "id" | "userId" | "tag">) {
  const formatedDate = new Intl.DateTimeFormat("ru-RU").format(
    date as unknown as Date
  );

  return (
    <>
      <h2 className={styles["journal-item__header"]}>{title}</h2>
      <h2 className={styles["journal-item__body"]}>
        <div className={styles["journal-item__date"]}>{formatedDate}</div>
        <div className={styles["journal-item__post"]}>{post}</div>
      </h2>
    </>
  );
}
