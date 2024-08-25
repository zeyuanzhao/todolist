import { createItem, createList } from "@/api/sql";

export const populateLists = async () => {
  for (let i = 0; i < 5; i++) {
    await createList("List " + i, "Description " + i, 0, "📝", "todo");
  }
};

export const populateItems = async (list_id: number) => {
  for (let i = 0; i < 5; i++) {
    await createItem(list_id, "task", "Item " + i);
  }
};
