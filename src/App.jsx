import "./App.css";

import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalList from "./components/JournalList/JournalList";
import JournalForm from "./components/JournalForm/JournalForm";
import { useLocalStorage } from "./hooks/useLocalStorage/use-localstorage.hook";

import { UserContextProvider } from "./context/userContext";

function App() {
  //[items, setItems] это [data,saveData] из кастомного хука useLocalStorage

  const [items, setItems] = useLocalStorage("data");

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
    setItems([
      ...mapItems(items),
      {
        // post: item.post,
        // title: item.title,
        ...item,
        date: new Date(item.date),
        id:
          items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1,
      },
    ]);
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
          <JournalAddButton></JournalAddButton>
          <JournalList items={mapItems(items)}></JournalList>
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={onSubmit} />
        </Body>
      </div>
    </UserContextProvider>
  );
}

export default App;
