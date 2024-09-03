import { Pressable, Text, View } from "react-native";

const Button = ({
  onPress,
  title,
  containerStyle,
  isDisabled,
}: {
  onPress: () => any;
  title: string;
  containerStyle?: string;
  isDisabled?: boolean;
}) => {
  return (
    <View className={"flex flex-row " + containerStyle}>
      <Pressable
        onPress={onPress}
        className={
          "border active:opacity-70 hover:opacity-70 " +
          (isDisabled && "opacity-70")
        }
        disabled={isDisabled}
      >
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
