import { createContext, ReactNode, useState } from "react";
import { UserContextProps } from "./UserContext.interface";

//UserContext = хранит в себе два объекта, Provider, Consumer
// UserContext.Provider - обертка всего
// UserContext.Consumer - обертка (место потребления контекста)

//UserContext - initialContext, если нам нужны данные в виде константы и они не будет изменяться, можно без оборота в провайдер
//UserContextProvider - это кастомный context, который принимает в себя children

export const UserContext = createContext<UserContextProps>({
  userId: 1,
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<number>(1);
  return (
    <>
      <UserContext.Provider value={{ userId, setUserId }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
