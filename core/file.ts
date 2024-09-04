import { fileTypeString } from "@/constants/file";
import { FileType } from "@/interfaces";
import * as DocumentPicker from "expo-document-picker";

export const filePicker = async (type: FileType) => {
  const result = await DocumentPicker.getDocumentAsync({
    type: fileTypeString[type as keyof typeof fileTypeString],
  });

  if (result.canceled) return;

  return result.assets[0];
};
