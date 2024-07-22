import styles from "./Header.module.css";

import { SelectUser } from "@/components/SelectUser";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <>
      <Logo text="𝒮𝑜𝓊𝓉𝒽𝒶𝓉𝑒𝓁𝑜𝓋𝑒 𝒥𝑜𝓊𝓇𝓃𝒶𝓁" />
      <SelectUser />
    </>
  );
};
