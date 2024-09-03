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
  return (
    <View className={containerStyle}>
      {title && <Text className="mb-2">{title}</Text>}
      {bottomSheet ? (
        <View className="border mt">
          <BottomSheetTextInput value={value} onChangeText={setValue} />
        </View>
      ) : (
        <TextInput
          className="border mt"
          value={value}
          onChangeText={setValue}
        />
      )}
    </View>
  );
};

export default TextField;
