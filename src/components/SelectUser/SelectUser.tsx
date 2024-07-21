import { useContext } from "react";
import { UserContext } from "../../context/UserContext/userContext";
import styles from "./SelectUser.module.css";

export default function SelectUser() {
  const { userId, setUserId } = useContext(UserContext);

  const changeUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId!(Number(e.target.value));
  };

  return (
    <>
      <select
        className={styles["select"]}
        name="user"
        id="user"
        value={userId}
        onChange={changeUser}
      >
        <option value="1">Oleg</option>
        <option value="2">Petr</option>
      </select>
    </>
  );
}