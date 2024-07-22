import { JournalList } from "@/interfaces/index";
import { SelectedItem } from "@/interfaces/index";

export interface JournalListProps {
  items: JournalList[];
  setSelectedItem: (item: SelectedItem) => void;
}
