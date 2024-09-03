import { CreateItemForm, CreateListForm } from "@/interfaces";
import { Alert } from "react-native";
import { createItem, createList } from "./sql";

export const handleCreateItem = async (
  listId: number,
  createItemForm: CreateItemForm,
  setIsLoading: (value: boolean) => void,
  setCreateItemForm: (value: CreateItemForm) => void
) => {
  if (createItemForm.content === "" || createItemForm.type === "") {
    Alert.alert("Please fill out all fields");
    return;
  }
  setIsLoading(true);

  try {
    await createItem(listId, createItemForm.type, createItemForm.content);
    setCreateItemForm({ ...createItemForm, content: "" });
  } catch (e) {
    if (e instanceof Error) Alert.alert("Error", e.message);
  } finally {
    setIsLoading(false);
  }
};
