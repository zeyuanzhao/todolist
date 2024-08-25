import { createItem, createList } from "@/api/sql";

export const populateLists = async () => {
  for (let i = 0; i < 5; i++) {
    await createList("List " + i, "Description " + i, 0, "📝", "todo");
  }
};

export const populateItems = async (listId: number) => {
  for (let i = 0; i < 5; i++) {
    await createItem(listId, "task", "Item " + i);
  }
};
