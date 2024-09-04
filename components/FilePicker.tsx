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
      className="border self-start"
      onPress={async () => {
        const fileResult = await filePicker(type);
        if (fileResult) setFile(fileResult.uri);
      }}
    >
      {file ? (
        <Image
          source={{ uri: file }}
          className="w-16 h-16"
          resizeMode="contain"
        />
      ) : (
        <View className="w-16 h-16 justify-center items-center">
          <Text>+</Text>
        </View>
      )}
    </Pressable>
  );
};

export default FilePicker;
