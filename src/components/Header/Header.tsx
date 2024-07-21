import styles from "./Header.module.css";

import SelectUser from "../SelectUser/SelectUser";
import { Logo } from "../Logo/Logo";

export default function Header() {
  return (
    <>
      <Logo text="𝒮𝑜𝓊𝓉𝒽𝒶𝓉𝑒𝓁𝑜𝓋𝑒 𝒥𝑜𝓊𝓇𝓃𝒶𝓁" />
      <SelectUser />
    </>
  );
}
