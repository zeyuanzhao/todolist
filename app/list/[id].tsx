import { createItem, getItems, getList } from "@/api/sql";
import ItemRow from "@/components/ItemRow";
import useLoader from "@/hooks/useLoader";
import { Item, List } from "@/interfaces";
import { populateItems } from "@/utils/populate";
import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import TextField from "@/components/TextField";
import DropDown from "@/components/DropDown";

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

  const bottomSheetRef = useRef<BottomSheet>(null);

  const [createItemForm, setCreateItemForm] = useState({
    type: "",
    content: "",
  });

  const typeDropdownData = [{ label: "Text", value: "text" }];

  return (
    <SafeAreaView>
      <View className="px-4 h-full">
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
          <Pressable
            onPress={() => bottomSheetRef.current?.expand()}
            className="border"
          >
            <Text>Create</Text>
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
              <Text>Length: {list.length}</Text>
            </View>
            <View>
              <FlatList
                data={items}
                renderItem={({ item }) => <ItemRow item={item} />}
              />
            </View>
          </View>
        )}
        <BottomSheet
          ref={bottomSheetRef}
          enablePanDownToClose
          snapPoints={["30%"]}
          index={-1}
          backgroundStyle={{
            backgroundColor: "",
          }}
          style={{
            paddingHorizontal: 16,
            borderStyle: "solid",
            borderWidth: 1,
          }}
        >
          <BottomSheetView>
            <Text className="text-xl">Add Item</Text>
            <DropDown
              title="Type"
              value={createItemForm.type}
              setValue={(value) =>
                setCreateItemForm({ ...createItemForm, type: value })
              }
              containerStyle="mt-2"
              data={typeDropdownData}
            />
            <TextField
              title="Content"
              value={createItemForm.content}
              setValue={(value) =>
                setCreateItemForm({ ...createItemForm, content: value })
              }
              containerStyle="mt-2"
            />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default ListPage;
