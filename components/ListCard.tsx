import { List } from "@/interfaces";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const ListCard = ({ item }: { item: List }) => {
  return (
    <Pressable
      className="w-36 h-24 border shadow-sm rounded-md bg-zinc-200 active:opacity-70 hover:opacity-70"
      onPress={() => {
        router.push(`/list/${item.id}`);
      }}
    >
      <Text className="text-lg text-center">{item.title}</Text>
      <Text className="text-sm text-center">{item.emoji}</Text>
      <Text className="text-sm text-center">{item.id}</Text>
    </Pressable>
  );
};

export default ListCard;
