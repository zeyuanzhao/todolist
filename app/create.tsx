import { handleCreateList } from "@/api/list";
import Button from "@/components/Button";
import DropDown from "@/components/DropDown";
import TextField from "@/components/TextField";
import { CreateListForm } from "@/interfaces";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
  const [createListForm, setCreateListForm] = useState<CreateListForm>({
    type: "",
    title: "",
    description: "",
    emoji: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const typeDropdownData = [
    { label: "List", value: "list" },
    { label: "Grid", value: "grid" },
  ];

  return (
    <SafeAreaView>
      <View>
        <View className="px-4">
          <Text className="text-3xl">Create List</Text>
          <TextField
            title="Title"
            value={createListForm.title}
            setValue={(value) =>
              setCreateListForm({ ...createListForm, title: value })
            }
            containerStyle="mt-4"
          />
          <TextField
            title="Description"
            value={createListForm.description}
            setValue={(value) =>
              setCreateListForm({ ...createListForm, description: value })
            }
            containerStyle="mt-4"
          />
          <TextField
            title="Emoji"
            value={createListForm.emoji}
            setValue={(value) =>
              setCreateListForm({ ...createListForm, emoji: value })
            }
            containerStyle="mt-4"
          />
          <DropDown
            title="Type"
            value={createListForm.type}
            setValue={(value) =>
              setCreateListForm({ ...createListForm, type: value })
            }
            data={typeDropdownData}
            containerStyle="mt-4"
          />
          <Button
            onPress={() =>
              handleCreateList(createListForm, setIsLoading, setCreateListForm)
            }
            title="Create List"
            containerStyle="mt-4"
          />
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Create;
