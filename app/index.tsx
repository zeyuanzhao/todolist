import { createList, getLists, resetDatabase } from "@/api/sql";
import ListCard from "@/components/ListCard";
import useLoader from "@/hooks/useLoader";
import { List } from "@/interfaces";
import { populateLists } from "@/utils/populate";
import { FlashList } from "@shopify/flash-list";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const {
    data: lists,
    isLoading,
    refetch,
  }: { data: List[]; isLoading: boolean; refetch: () => List[] } = useLoader(
    getLists
  );

  return (
    <SafeAreaView className="h-full">
      <View>
        <View className="my-8 px-4">
          <Text className="text-3xl">My Lists</Text>
          <View className="flex flex-row justify-between">
            <Pressable onPress={resetDatabase} className="border mb-4">
              <Text>Reset DB</Text>
            </Pressable>
            <Pressable onPress={refetch} className="border mb-4">
              <Text>Refresh</Text>
            </Pressable>
            <Pressable onPress={populateLists} className="border mb-4">
              <Text>Populate Lists</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/create")}
              className="border mb-4"
            >
              <Text>Create</Text>
            </Pressable>
          </View>
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
