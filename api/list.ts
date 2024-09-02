import { CreateListForm } from "@/interfaces";
import { Alert } from "react-native";
import { createList } from "./sql";

export const handleCreateList = async (
  createListForm: CreateListForm,
  setIsLoading: (value: boolean) => void,
  setCreateForm: (value: CreateListForm) => void
) => {
  if (
    createListForm.title === "" ||
    createListForm.description === "" ||
    createListForm.emoji === "" ||
    createListForm.type === ""
  ) {
    Alert.alert("Please fill out all fields");
    return;
  }
  setIsLoading(true);

  try {
    await createList(
      createListForm.title,
      createListForm.description,
      createListForm.emoji,
      createListForm.type
    );
  } catch (e) {
    if (e instanceof Error) Alert.alert("Error", e.message);
  } finally {
    setCreateForm({
      title: "",
      description: "",
      emoji: "",
      type: "",
    });
  }
};
