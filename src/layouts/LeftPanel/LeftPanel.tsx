import styles from "./LeftPanel.module.css";
import { LeftPanelProps } from "./LeftPanel.props";

export default function LeftPanel({ children }: LeftPanelProps) {
  return <div className={styles["left-panel"]}>{children}</div>;
}
