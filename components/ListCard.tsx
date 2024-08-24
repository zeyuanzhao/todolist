import { List } from "@/interfaces";
import { Text, View } from "react-native";

const ListCard = ({ item }: { item: List }) => {
  return (
    <View className="w-36 h-24 border rounded-md">
      <Text className="text-lg text-center">{item.title}</Text>
      <Text className="text-sm text-center">{item.length}</Text>
    </View>
  );
};

export default ListCard;
