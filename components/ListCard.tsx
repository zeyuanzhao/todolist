import { List } from "@/interfaces";
import { Text, View } from "react-native";

const ListCard = ({ item }: { item: List }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default ListCard;
