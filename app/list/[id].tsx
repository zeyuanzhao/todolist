import { getList } from "@/api/sql";
import useLoader from "@/hooks/useLoader";
import { List } from "@/interfaces";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ListPage = () => {
  const id = Number(useLocalSearchParams().id);

  const { data: list, isLoading }: { data: List; isLoading: boolean } =
    useLoader(() => getList(id));

  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text>{list.id}</Text>
          <Text>{list.title}</Text>
          <Text>{list.description}</Text>
          <Text>{list.length}</Text>
          <Text>{list.emoji}</Text>
          <Text>{list.type}</Text>
          <Text></Text>
        </>
      )}
    </SafeAreaView>
  );
};

export default ListPage;
