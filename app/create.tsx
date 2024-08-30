import DropDown from "@/components/DropDown";
import TextField from "@/components/TextField";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
  const [type, setType] = useState("list");

  return (
    <SafeAreaView>
      <View>
        <View className="px-4">
          <Text className="text-3xl">Create List</Text>
          <TextField title="Title" />
          <TextField title="Description" />
          <TextField title="Emoji" />
          <DropDown title="Type" setValue={setType} />
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Create;
