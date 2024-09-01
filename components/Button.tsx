import { Pressable, Text, View } from "react-native";

const Button = ({
  onPress,
  title,
  containerStyle,
}: {
  onPress: () => any;
  title: string;
  containerStyle?: string;
}) => {
  return (
    <View className={"flex flex-row " + containerStyle}>
      <Pressable onPress={onPress} className="border">
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
