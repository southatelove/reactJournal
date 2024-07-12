import styles from "./Logo.module.css";
import { memo } from "react";

export const Logo = memo(function Logo({ text }) {
  return (
    <>
      <p className={styles.logo}> {text}</p>
    </>
  );
});
// export default memo(Logo);
