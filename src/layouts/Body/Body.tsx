import styles from "./Body.module.css";
import { BodyProps } from "./Body.props";

export const Body = ({ children }: BodyProps) => {
  return <div className={styles["body"]}>{children}</div>;
};
