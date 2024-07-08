// import styles from "./SelectUser.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function SelectUser() {
  const { userId, setUserId } = useContext(UserContext);

  const changeUser = (e) => {
    setUserId(Number(e.target.value));
  };

  return (
    <>
      <select name="user" id="user" value={userId} onChange={changeUser}>
        <option value="1">Oleg</option>
        <option value="2">Petr</option>
      </select>
    </>
  );
}