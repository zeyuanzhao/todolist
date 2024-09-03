import { List } from "@/interfaces";
import { Text, View } from "react-native";

const ListInfo = ({ list }: { list: List }) => {
  return (
    <View>
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-end">
          <Text className="text-3xl mr-4">{list.title}</Text>
          <Text className="text-lg">{list.length}</Text>
        </View>
        <Text className="text-3xl">{list.emoji}</Text>
      </View>
      <Text className="mt-2">{list.description}</Text>
    </View>
  );
};

export default ListInfo;
