import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DropDown = ({
  title,
  value,
  setValue,
  containerStyle,
  data,
}: {
  title: string;
  value: string;
  setValue: (value: string) => any;
  containerStyle?: string;
  data: { label: string; value: string }[];
}) => {
  return (
    <View className={containerStyle}>
      {title && <Text className="mb-2">{title}</Text>}
      <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        onChange={(item: { label: string; value: string }) => {
          setValue(item.value);
        }}
        placeholder="Select a type"
        value={value}
        style={{
          borderWidth: 0.25,
          borderColor: "black",
          padding: 4,
          borderRadius: 6,
        }}
        selectedTextStyle={{ fontSize: 16 }}
      />
    </View>
  );
};

export default DropDown;
