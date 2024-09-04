import React from "react";
import { Text, TextInput, View } from "react-native";

const TextField = ({
  value,
  setValue,
  title,
  containerStyle,
}: {
  value: string;
  setValue: (value: string) => any;
  title?: string;
  containerStyle?: string;
}) => {
  const inputStyle = "border-0.5 p-1 rounded-md text-[32px] w-[48px] h-[48px]";

  return (
    <View className={containerStyle}>
      {title && <Text className="mb-2">{title}</Text>}

      <TextInput
        className={inputStyle}
        value={value}
        onChangeText={(newValue) => {
          setValue(newValue.substring(value.length, newValue.length));
        }}
      />
    </View>
  );
};

export default TextField;
