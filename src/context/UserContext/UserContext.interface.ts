import { Dispatch, SetStateAction } from "react";

export interface UserContextProps {
  userId: number;
  setUserId?: Dispatch<SetStateAction<number>>;
}
