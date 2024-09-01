import { Text, TextInput, View } from "react-native";

const TextField = ({
  title,
  containerStyle,
}: {
  title?: string;
  containerStyle?: string;
}) => {
  return (
    <View className={containerStyle}>
      {title && <Text className="mb-2">{title}</Text>}
      <TextInput className="border mt" />
    </View>
  );
};

export default TextField;
