import { ButtonHTMLAttributes } from "react";

export interface CardButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
