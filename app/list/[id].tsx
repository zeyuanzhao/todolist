import { getItems, getList } from "@/api/sql";
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
import Button from "@/components/Button";
import { handleCreateItem } from "@/api/item";
import ListInfo from "@/components/ListInfo";
import { itemTypeDropdownData } from "@/constants/Dropdown";

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

  const [isCreateLoading, setIsCreateLoading] = useState(false);

  const refetch = async () => {
    refetchList();
    refetchItems();
  };

  return (
    <SafeAreaView>
      <View className="px-4 h-full">
        <View className="flex flex-row justify-between mb-4">
          <Pressable onPress={() => router.back()} className="border">
            <Text>Back</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              const populate = async () => {
                await populateItems(list.id);
                refetch();
              };
              populate();
            }}
            className="border"
          >
            <Text>Populate Items</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              refetch();
            }}
            className="border"
          >
            <Text>Refresh</Text>
          </Pressable>
          <Pressable
            onPress={() => bottomSheetRef.current?.snapToIndex(0)}
            className="border"
          >
            <Text>Create</Text>
          </Pressable>
        </View>
        {isListLoading || isItemsLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <ListInfo list={list} />
            <View className="mt-4">
              <FlatList
                data={items}
                renderItem={({ item }) => <ItemRow item={item} />}
                className="h-full"
              />
            </View>
          </View>
        )}
        <BottomSheet
          ref={bottomSheetRef}
          enablePanDownToClose
          snapPoints={["33%"]}
          index={-1}
          backgroundStyle={{
            backgroundColor: "#f2f2f2",
          }}
          style={{
            paddingHorizontal: 16,
            borderStyle: "solid",
            borderTopWidth: 1,
          }}
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore"
        >
          <BottomSheetView>
            <View className="flex flex-row items-center justify-between ">
              <Text className="text-xl">Add Item</Text>
              <Button
                onPress={() => {
                  bottomSheetRef.current?.close();
                }}
                title={"Close"}
              />
            </View>
            <DropDown
              title="Type"
              value={createItemForm.type}
              setValue={(value) =>
                setCreateItemForm({ ...createItemForm, type: value })
              }
              containerStyle="mt-2"
              data={itemTypeDropdownData}
            />
            <TextField
              title="Content"
              value={createItemForm.content}
              setValue={(value) =>
                setCreateItemForm({ ...createItemForm, content: value })
              }
              containerStyle="mt-2"
              bottomSheet
            />
            <Button
              onPress={() => {
                handleCreateItem(
                  list.id,
                  createItemForm,
                  setIsCreateLoading,
                  setCreateItemForm
                );
                refetchItems();
                refetchList();
              }}
              title="Create Item"
              containerStyle="mt-6 mb-4"
              isDisabled={isCreateLoading}
            />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default ListPage;
