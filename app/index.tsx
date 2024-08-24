import ListCard from "@/components/ListCard";
import { List } from "@/interfaces";
import { FlashList } from "@shopify/flash-list";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const data: List[] = [
    { id: 0, title: "List 0", length: 10 },
    { id: 1, title: "List 1", length: 20 },
    { id: 2, title: "List 2", length: 30 },
    { id: 3, title: "List 3", length: 40 },
    { id: 4, title: "List 4", length: 50 },
  ];

  return (
    <SafeAreaView className="h-full">
      <View>
        <View className="my-8 px-4">
          <Text className="text-3xl">My Lists</Text>
        </View>
        <View className="px-4">
          <FlatList
            data={data}
            renderItem={({ item }) => <ListCard item={item} />}
            numColumns={2}
            contentContainerStyle={{
              alignItems: "center",
              gap: 16,
            }}
            columnWrapperStyle={{
              gap: 16,
            }}
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Index;
