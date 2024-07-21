import { JournalList } from "../../interfaces/journalList.interface";
import { SelectedItem } from "../../interfaces/selectedItem.interface";

export interface JournalListProps {
  items: JournalList[];
  setSelectedItem: (item: SelectedItem) => void;
}
