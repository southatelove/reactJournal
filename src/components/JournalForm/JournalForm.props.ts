import { ItemsI } from "@/interfaces/index";
import { SelectedItem } from "@/interfaces/index";

export interface JournalFormProps {
  onSubmit: (item: ItemsI) => void;
  onDelete: (id: number) => void;
  selectedItem: SelectedItem | undefined;
}
