import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DropDown = ({
  title,
  value,
  setValue,
  containerStyle,
}: {
  title: string;
  value: string;
  setValue: (value: string) => any;
  containerStyle?: string;
}) => {
  const data = [
    { label: "List", value: "list" },
    { label: "Grid", value: "grid" },
  ];
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
        style={{ borderWidth: 1, borderColor: "black" }}
      />
    </View>
  );
};

export default DropDown;
