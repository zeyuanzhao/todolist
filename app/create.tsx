import { createList } from "@/api/sql";
import Button from "@/components/Button";
import DropDown from "@/components/DropDown";
import TextField from "@/components/TextField";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [emoji, setEmoji] = useState("");

  return (
    <SafeAreaView>
      <View>
        <View className="px-4">
          <Text className="text-3xl">Create List</Text>
          <TextField
            title="Title"
            value={title}
            setValue={setTitle}
            containerStyle="mt-4"
          />
          <TextField
            title="Description"
            value={description}
            setValue={setDescription}
            containerStyle="mt-4"
          />
          <TextField
            title="Emoji"
            value={emoji}
            setValue={setEmoji}
            containerStyle="mt-4"
          />
          <DropDown
            title="Type"
            setValue={setType}
            value={type}
            containerStyle="mt-4"
          />
          <Button
            onPress={() => Alert.alert("Pressed")}
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
