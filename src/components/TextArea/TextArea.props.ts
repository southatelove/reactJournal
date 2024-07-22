import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TextAreaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  isValid: boolean;
  value: string;
  onChange: (event: any) => void;
  name?: string;
  cols?: number;
  rows?: number;
}
