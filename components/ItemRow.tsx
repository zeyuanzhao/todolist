import { Item } from "@/interfaces";
import { Text, View } from "react-native";

const ItemRow = ({ item }: { item: Item }) => {
  return (
    <View className="flex flex-row justify-between">
      <Text>{item.id}</Text>
      <Text>{item.listId}</Text>
      <Text>{item.type}</Text>
      <Text>{item.content}</Text>
      <Text>{item.completed}</Text>
      <Text>{item.created}</Text>
    </View>
  );
};

export default ItemRow;
