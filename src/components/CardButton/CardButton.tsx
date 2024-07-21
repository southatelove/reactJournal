import styles from "./CardButton.module.css";
import { CardButtonProps } from "./CardButton.props";

export default function CardButton({
  children,
  className,
  ...props
}: CardButtonProps) {
  return (
    <>
      <button {...props} className={styles["card-button"]}>
        {children}
      </button>
    </>
  );
}
