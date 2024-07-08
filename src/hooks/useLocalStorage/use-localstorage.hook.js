import { useState, useEffect } from "react";

export function useLocalStorage (key) {

    const [data,setData] = useState();
    console.log(key, 'key');
    console.log(data,'data');

    useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key));
    if (res) {      
        setData(res);
    }
  }, []);


  const saveData = (newData) => {
    console.log(newData, 'newData');
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

//     useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("data"));
//     if (data) {
//       setItems(
//         data.map((item) => ({
//           ...item,
//           date: new Date(item.date),
//         }))
//       );
//     }
//   }, []);

// useEffect(() => {
//     if (items.length) {
//       localStorage.setItem("data", JSON.stringify(items));
//     }
//   }, [items]);

    return [data,saveData];
}