import "./App.css";

import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalList from "./components/JournalList/JournalList";
import JournalForm from "./components/JournalForm/JournalForm";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setItems(
        data.map((item) => ({
          ...item,
          date: new Date(item.date),
        }))
      );
    }
  }, []);

  useEffect(() => {
    if (items.length) {
      localStorage.setItem("data", JSON.stringify(items));
    }
  }, [items]);

  const onSubmit = (item) => {
    setItems((prev) => [
      ...prev,
      {
        post: item.post,
        title: item.title,
        date: new Date(item.date),
        id: prev.length > 0 ? Math.max(...prev.map((item) => item.id + 1)) : 1,
      },
    ]);
  };

  //из-за форматирования date не подойдет
  // const addItem = (item) => {
  //   setItems((prev) => [...prev, item]);
  // };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton></JournalAddButton>
        <JournalList items={items}></JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={onSubmit} />
      </Body>
    </div>
  );
}

export default App;
