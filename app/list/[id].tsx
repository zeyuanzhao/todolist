import { getItems, getList } from "@/api/sql";
import useLoader from "@/hooks/useLoader";
import { Item, List } from "@/interfaces";
import { populateItems } from "@/utils/populate";
import { useLocalSearchParams } from "expo-router";
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
      <View className="flex flex-row justify-between">
        <Pressable
          onPress={() => populateItems(list.id)}
          className="border mb-4"
        >
          <Text>Populate Items</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            refetchList();
            refetchItems();
          }}
          className="border mb-4"
        >
          <Text>Refresh</Text>
        </Pressable>
      </View>
      {isListLoading || isItemsLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <View>
            <Text>{list.id}</Text>
            <Text>{list.title}</Text>
            <Text>{list.description}</Text>
            <Text>{list.length}</Text>
            <Text>{list.emoji}</Text>
            <Text>{list.type}</Text>
          </View>
          <View>
            <FlatList
              data={items}
              renderItem={({ item }) => <Text>{item.content}</Text>}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ListPage;
