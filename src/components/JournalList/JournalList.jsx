import "./JournalList.css";
import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function JournalList({ items }) {
  const { userId } = useContext(UserContext);

  if (items.length === 0) {
    return <p>Записей нет, добавьте первую</p>;
  }
  const sortItems = (a, b) => {
    return a.date < b.date ? 1 : -1;
  };

  return (
    <>
      {items
        .filter((item) => item.userId === userId)
        .sort(sortItems)
        .map((item) => (
          <CardButton key={item.id}>
            <JournalItem title={item.title} text={item.post} date={item.date} />
          </CardButton>
        ))}
    </>
  );
}
