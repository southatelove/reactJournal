import { createContext, useState } from "react";

//UserContext = хранит в себе два объекта, Provider, Consumer
// UserContext.Provider - обертка всего
// UserContext.Consumer - обертка (место потребления контекста)

//initialContext для JournalList
export const UserContext = createContext({
  userId: 1,
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
