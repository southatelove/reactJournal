import styles from "./Logo.module.css";
import { memo } from "react";

export const Logo = memo(function Logo({ image }) {
  return (
    <>
      <img className={styles.logo} src={image} alt="logo" />
    </>
  );
});
// export default memo(Logo);
