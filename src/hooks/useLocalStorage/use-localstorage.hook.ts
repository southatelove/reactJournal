import { useState, useEffect } from "react";
import { ItemsI } from "../../interfaces/Items.interface";

export function useLocalStorage(key: string) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key)!);
    if (res) {
      setData(res);
    }
  }, []);

  const saveData = (newData: ItemsI) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData];
}
