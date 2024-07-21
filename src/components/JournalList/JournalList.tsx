import styles from "./JournalList.module.css";
import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/userContext";
import { JournalListProps } from "./JournalList.props";

export default function JournalList({
  items,
  setSelectedItem,
}: JournalListProps) {
  const { userId } = useContext(UserContext);

  if (items.length === 0) {
    return <p>Записей нет, добавьте первую</p>;
  }
  const sortItems = (a: any, b: any): number => {
    return a.date < b.date ? 1 : -1;
  };

  return (
    <>
      {items
        .filter((item) => item.userId === userId)
        .sort(sortItems)
        .map((item) => (
          <CardButton key={item.id} onClick={() => setSelectedItem(item)}>
            <JournalItem title={item.title} post={item.post} date={item.date} />
          </CardButton>
        ))}
    </>
  );
}
