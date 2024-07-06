import "./App.css";

import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalList from "./components/JournalList/JournalList";
import JournalForm from "./components/JournalForm/JournalForm";
import { useState } from "react";

const INITIAL_STATE = [
  // {
  //   id: 1,
  //   title: "first title",
  //   text: "first text",
  //   date: new Date(),
  // },
];

function App() {
  const [items, setItems] = useState(INITIAL_STATE);

  const addItem = (item) => {
    setItems((prev) => [
      ...prev,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id:
          prev.length > 0 ? Math.max(...(prev.map((item) => item.id) + 1)) : 1,
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
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
