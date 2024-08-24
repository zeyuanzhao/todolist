import ListCard from "@/components/ListCard";
import { List } from "@/interfaces";
import { FlashList } from "@shopify/flash-list";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const data: List[] = [
    { title: "Item 1", description: "Description 1" },
    { title: "Item 2", description: "Description 2" },
    { title: "Item 3", description: "Description 3" },
    { title: "Item 4", description: "Description 4" },
    { title: "Item 5", description: "Description 5" },
    { title: "Item 6", description: "Description 6" },
    { title: "Item 7", description: "Description 7" },
    { title: "Item 8", description: "Description 8" },
    { title: "Item 9", description: "Description 9" },
    { title: "Item 10", description: "Description 10" },
  ];

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <ListCard item={item} />}
          numColumns={2}
        />
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Index;
