import { handleCreateList } from "@/core/list";
import Button from "@/components/Button";
import CharacterSelect from "@/components/CharacterSelect";
import DropDown from "@/components/DropDown";
import TextField from "@/components/TextField";
import { listTypeDropdownData } from "@/constants/dropdown";
import { CreateListForm } from "@/interfaces";
import { router } from "expo-router";
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

  return (
    <SafeAreaView>
      <View>
        <View className="px-4">
          <View className="flex flex-row items-center justify-between ">
            <Text className="text-3xl">Create List</Text>
            <Button
              onPress={() => {
                router.back();
              }}
              title={"Close"}
            />
          </View>
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
          {/* <TextField
            title="Emoji"
            value={createListForm.emoji}
            setValue={(value) =>
              setCreateListForm({ ...createListForm, emoji: value })
            }
            containerStyle="mt-4"
          /> */}
          <CharacterSelect
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
            data={listTypeDropdownData}
            containerStyle="mt-4"
          />
          <Button
            onPress={() =>
              handleCreateList(createListForm, setIsLoading, setCreateListForm)
            }
            title="Create List"
            containerStyle="mt-4"
            isDisabled={isLoading}
          />
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Create;
