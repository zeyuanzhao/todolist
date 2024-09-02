import { getItems, getList } from "@/api/sql";
import ItemRow from "@/components/ItemRow";
import useLoader from "@/hooks/useLoader";
import { Item, List } from "@/interfaces";
import { populateItems } from "@/utils/populate";
import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ListPage = () => {
  const id = Number(useLocalSearchParams().id);

  const {
    data: list,
    isLoading: isListLoading,
    refetch: refetchList,
  }: { data: List; isLoading: boolean; refetch: () => List } = useLoader(() =>
    getList(id)
  );
  const {
    data: items,
    isLoading: isItemsLoading,
    refetch: refetchItems,
  }: { data: Item[]; isLoading: boolean; refetch: () => Item[] } = useLoader(
    () => getItems(id)
  );

  return (
    <SafeAreaView>
      <View className="px-4">
        <View className="flex flex-row justify-between mb-4">
          <Pressable onPress={() => router.back()} className="border">
            <Text>Back</Text>
          </Pressable>
          <Pressable onPress={() => populateItems(list.id)} className="border">
            <Text>Populate Items</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              refetchList();
              refetchItems();
            }}
            className="border"
          >
            <Text>Refresh</Text>
          </Pressable>
        </View>
        {isListLoading || isItemsLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <View>
              <Text>Id: {list.id}</Text>
              <Text>Title: {list.title}</Text>
              <Text>Description: {list.description}</Text>
              <Text>Emoji: {list.emoji}</Text>
              <Text>Type: {list.type}</Text>
            </View>
            <View>
              <FlatList
                data={items}
                renderItem={({ item }) => <ItemRow item={item} />}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ListPage;
