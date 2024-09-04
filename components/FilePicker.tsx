import { filePicker } from "@/core/file";
import { FileType } from "@/interfaces";
import { Image, Pressable, Text, View } from "react-native";

const FilePicker = ({
  type,
  file,
  setFile,
}: {
  type: FileType;
  file: string;
  setFile: (file: string) => void;
}) => {
  return (
    <Pressable
      className="border w-16 h-16"
      onPress={async () => {
        const fileResult = await filePicker(type);
        if (fileResult) setFile(fileResult.uri);
      }}
    >
      <Text>{file}</Text>
    </Pressable>
  );
};

export default FilePicker;
