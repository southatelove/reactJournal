import styles from "./JournalItem.module.css";

import { JournalItemProps } from "./JournalItem.props";

export const JournalItem = ({ title, post, date }: JournalItemProps) => {
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
};
