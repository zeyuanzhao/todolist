import { Image, Pressable, Text, View } from "react-native";

const FilePicker = ({
  type,
  file,
  setFile,
}: {
  type: string;
  file: string;
  setFile: (file: string) => void;
}) => {
  return (
    <Pressable className="border">
      <Text>{file}</Text>
    </Pressable>
  );
};

export default FilePicker;
