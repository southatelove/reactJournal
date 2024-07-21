import { forwardRef } from "react";
import styles from "./TextArea.module.css";
import cn from "classnames";
import { TextAreaProps } from "./TextArea.props";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    { className, isValid = true, value, onChange, ...props },
    ref
  ) {
    return (
      <>
        <textarea
          ref={ref}
          {...props}
          className={cn(className, styles["input"], {
            [styles["invalid"]]: !isValid,
          })}
          value={value}
          onChange={onChange}
        />
      </>
    );
  }
);

export default TextArea;
