import { JournalList } from "src/interfaces/journalList.interface";

export type JournalItemProps = Omit<JournalList, "id" | "userId" | "tag">;
