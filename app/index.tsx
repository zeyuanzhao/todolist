import { getLists, resetDatabase } from "@/api/sql";
import ListCard from "@/components/ListCard";
import useLoader from "@/hooks/useLoader";
import { List } from "@/interfaces";
import { populateLists } from "@/utils/populate";
import { router, useFocusEffect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const {
    data: lists,
    isLoading,
    refetch,
  }: { data: List[]; isLoading: boolean; refetch: () => List[] } = useLoader(
    getLists
  );

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  return (
    <SafeAreaView className="h-full">
      <View>
        <View className="my-8 px-4">
          <Text className="text-3xl">My Lists</Text>
          <View className="flex flex-row justify-between mb-4">
            <Pressable onPress={resetDatabase} className="border">
              <Text>Reset DB</Text>
            </Pressable>
            <Pressable onPress={refetch} className="border">
              <Text>Refresh</Text>
            </Pressable>
            <Pressable onPress={populateLists} className="border">
              <Text>Populate Lists</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/create")}
              className="border"
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
            className="h-full"
            ListEmptyComponent={
              isLoading ? (
                <ActivityIndicator animating={true} />
              ) : (
                <Text>No lists</Text>
              )
            }
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Index;
