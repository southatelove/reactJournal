import "./App.css";

import { LeftPanel } from "./layouts/LeftPanel";
import { Body } from "./layouts/Body";
import { Header } from "./components/Header";

import { JournalAddButton } from "@/components/JournalAddButton";
import { JournalList } from "@/components/JournalList";
import { JournalForm } from "@/components/JournalForm";

import { useLocalStorage } from "./hooks/useLocalStorage/use-localstorage.hook";

import { UserContextProvider } from "./context/UserContext/userContext";
import { useState } from "react";

import { ItemsI } from "@/interfaces/index";
import { SelectedItem } from "@/interfaces/index";

function App() {
  //[items, setItems] это [data,saveData] из кастомного хука useLocalStorage

  const [items, setItems] = useLocalStorage("data");
  const [selectedItem, setSelectedItem] = useState<SelectedItem>();

  function mapItems(items: ItemsI[]) {
    if (items) {
      return items.map((i) => ({
        ...i,
        date: new Date(i.date),
      }));
    } else {
      return [];
    }
  }

  const onSubmit = (item: ItemsI) => {
    if (!item.id) {
      setItems([
        ...mapItems(items),
        {
          // post: item.post,
          // title: item.title,
          ...item,
          date: new Date(item.date),
          id:
            items?.length > 0
              ? Math.max(...items.map((item: ItemsI) => item.id)) + 1
              : 1,
        },
      ]);
    } else {
      setItems([
        ...mapItems(items).map((i) => {
          if (i.id === item.id) {
            return {
              ...item,
            };
          }
          return i;
        }),
      ]);
    }
  };

  const onDelete = (id: number) => {
    setItems(items.filter((item: ItemsI) => item.id !== id));
  };

  //из-за форматирования date не подойдет
  // const addItem = (item) => {
  //   setItems((prev) => [...prev, item]);
  // };

  return (
    <UserContextProvider>
      <div className="wrapper">
        <LeftPanel>
          <Header />
          <JournalAddButton clearForm={() => setSelectedItem(null!)} />
          <JournalList
            items={mapItems(items)}
            setSelectedItem={setSelectedItem}
          />
        </LeftPanel>
        <Body>
          <JournalForm
            onSubmit={onSubmit}
            selectedItem={selectedItem}
            onDelete={onDelete}
          />
        </Body>
      </div>
    </UserContextProvider>
  );
}

export default App;
