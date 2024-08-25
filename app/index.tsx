import { createList, getLists, resetDatabase } from "@/api/sql";
import ListCard from "@/components/ListCard";
import useLoader from "@/hooks/useLoader";
import { List } from "@/interfaces";
import { FlashList } from "@shopify/flash-list";
import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const { data: lists, isLoading, refetch } = useLoader(getLists);

  return (
    <SafeAreaView className="h-full">
      <View>
        <View className="my-8 px-4">
          <Text className="text-3xl">My Lists</Text>
          <Pressable onPress={resetDatabase} className="border w-16">
            <Text>Reset DB</Text>
          </Pressable>
        </View>
        <View className="px-4">
          <FlatList
            data={lists}
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
