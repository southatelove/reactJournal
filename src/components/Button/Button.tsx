import styles from "./Button.module.css";

import { memo } from "react";
import { ButtonProps } from "./Button.props";

export const Button = memo(function Button({ children, onClick }: ButtonProps) {
  return (
    <>
      <button
        className={(styles["button"], styles["accent"])}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
});
