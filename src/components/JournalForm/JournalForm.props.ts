import { ItemsI } from "../../interfaces/Items.interface";
import { SelectedItem } from "../../interfaces/selectedItem.interface";

export interface JournalFormProps {
  onSubmit: (item: ItemsI) => void;
  onDelete: (id: number) => void;
  selectedItem: SelectedItem | undefined;
}
