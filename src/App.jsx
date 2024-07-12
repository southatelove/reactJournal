import "./App.css";

import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalList from "./components/JournalList/JournalList";
import JournalForm from "./components/JournalForm/JournalForm";
import { useLocalStorage } from "./hooks/useLocalStorage/use-localstorage.hook";

import { UserContextProvider } from "./context/userContext";
import { useState } from "react";

function App() {
  //[items, setItems] это [data,saveData] из кастомного хука useLocalStorage

  const [items, setItems] = useLocalStorage("data");
  const [selectedItem, setSelectedItem] = useState({});

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("data"));
  //   if (data) {
  //     setItems(
  //       data.map((item) => ({
  //         ...item,
  //         date: new Date(item.date),
  //       }))
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   if (items.length) {
  //     localStorage.setItem("data", JSON.stringify(items));
  //   }
  // }, [items]);

  // const onSubmit = (item) => {
  //   setItems((prev) => [
  //     ...prev,
  //     {
  //       post: item.post,
  //       title: item.title,
  //       date: new Date(item.date),
  //       id: prev.length > 0 ? Math.max(...prev.map((item) => item.id + 1)) : 1,
  //     },
  //   ]);
  // };

  function mapItems(items) {
    if (items) {
      return items.map((i) => ({
        ...i,
        date: new Date(i.date),
      }));
    } else {
      return [];
    }
  }

  const onSubmit = (item) => {
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
              ? Math.max(...items.map((item) => item.id)) + 1
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

  //из-за форматирования date не подойдет
  // const addItem = (item) => {
  //   setItems((prev) => [...prev, item]);
  // };

  return (
    <UserContextProvider>
      <div className="app">
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JournalList
            items={mapItems(items)}
            setSelectedItem={setSelectedItem}
          />
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={onSubmit} selectedItem={selectedItem} />
        </Body>
      </div>
    </UserContextProvider>
  );
}

export default App;
