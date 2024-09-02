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
  const [createListForm, setCreateForm] = useState<CreateListForm>({
    type: "",
    title: "",
    description: "",
    emoji: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <View className="px-4">
          <Text className="text-3xl">Create List</Text>
          <TextField
            title="Title"
            value={createListForm.title}
            setValue={(value) =>
              setCreateForm({ ...createListForm, title: value })
            }
            containerStyle="mt-4"
          />
          <TextField
            title="Description"
            value={createListForm.description}
            setValue={(value) =>
              setCreateForm({ ...createListForm, description: value })
            }
            containerStyle="mt-4"
          />
          <TextField
            title="Emoji"
            value={createListForm.emoji}
            setValue={(value) =>
              setCreateForm({ ...createListForm, emoji: value })
            }
            containerStyle="mt-4"
          />
          <DropDown
            title="Type"
            value={createListForm.type}
            setValue={(value) =>
              setCreateForm({ ...createListForm, type: value })
            }
            containerStyle="mt-4"
          />
          <Button
            onPress={() =>
              handleCreateList(createListForm, setIsLoading, setCreateForm)
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
