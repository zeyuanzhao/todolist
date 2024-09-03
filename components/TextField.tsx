import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import React from "react";
import { Text, TextInput, View } from "react-native";

const TextField = ({
  value,
  setValue,
  title,
  containerStyle,
  bottomSheet,
}: {
  value: string;
  setValue: (value: string) => any;
  title?: string;
  containerStyle?: string;
  bottomSheet?: boolean;
}) => {
  const inputStyle = "border-0.5 p-1 rounded-md text-[16px]";

  return (
    <View className={containerStyle}>
      {title && <Text className="mb-2">{title}</Text>}
      {bottomSheet ? (
        <View className={inputStyle}>
          <BottomSheetTextInput value={value} onChangeText={setValue} />
        </View>
      ) : (
        <TextInput
          className={inputStyle}
          value={value}
          onChangeText={setValue}
          // style={{ fontSize: 80 }}
        />
      )}
    </View>
  );
};

export default TextField;
