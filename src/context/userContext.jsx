import { createContext, useState } from "react";

//UserContext = хранит в себе два объекта, Provider, Consumer
// UserContext.Provider - обертка всего
// UserContext.Consumer - обертка (место потребления контекста)

//UserContext - initialContext, если нам нужны данные в виде константы и они не будет изменяться, можно без оборота в провайдер
//UserContextProvider - это кастомный context, который принимает в себя children

export const UserContext = createContext({
  userId: 2,
});

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(1);
  return (
    <>
      <UserContext.Provider value={{ userId, setUserId }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
