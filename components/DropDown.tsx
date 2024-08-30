import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DropDown = ({
  setValue,
  title,
}: {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  title: string;
}) => {
  const data = [
    { label: "List", value: "list" },
    { label: "Grid", value: "grid" },
  ];
  return (
    <View className="mt-4">
      {title && <Text className="mb-2">{title}</Text>}
      <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        onChange={(item: { label: string; value: string }) => {
          setValue(item.value);
        }}
        placeholder="Select a type"
        style={{ borderWidth: 1, borderColor: "black" }}
      />
    </View>
  );
};

export default DropDown;
