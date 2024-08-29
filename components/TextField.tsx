import { Text, TextInput, View } from "react-native";

const TextField = ({ title }: { title?: string }) => {
  return (
    <View className="mt-4">
      {title && <Text className="mb-2">{title}</Text>}
      <TextInput className="border mt" />
    </View>
  );
};

export default TextField;
