import { Item } from "@/interfaces";
import { Text, View } from "react-native";

const ItemRow = ({ item }: { item: Item }) => {
  return (
    <View className="flex flex-row justify-between border-b-0.5 py-1">
      <Text>{item.content}</Text>
    </View>
  );
};

export default ItemRow;
