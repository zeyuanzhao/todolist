import React from "react";
import { Text, TextInput, View } from "react-native";

const TextField = ({
  value,
  setValue,
  title,
  containerStyle,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  title?: string;
  containerStyle?: string;
}) => {
  return (
    <View className={containerStyle}>
      {title && <Text className="mb-2">{title}</Text>}
      <TextInput className="border mt" value={value} onChangeText={setValue} />
    </View>
  );
};

export default TextField;
