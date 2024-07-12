import "./Button.css";
import { memo } from "react";

export const Button = memo(function Button({ children, onClick }) {
  return (
    <>
      <button className="button accent" onClick={onClick}>
        {children}
      </button>
    </>
  );
});
