import styles from "./Logo.module.css";
import { memo } from "react";
import { LogoProps } from "./Logo.props";

export const Logo = memo(function Logo({ text }: LogoProps) {
  return (
    <>
      <p className={styles.logo}> {text}</p>
    </>
  );
});
