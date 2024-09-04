import { Pressable, Text, View } from "react-native";

const Button = ({
  onPress,
  title,
  containerStyle,
  buttonStyle,
  isDisabled,
}: {
  onPress: () => any;
  title: string;
  containerStyle?: string;
  buttonStyle?: string;
  isDisabled?: boolean;
}) => {
  return (
    <View className={"flex flex-row " + containerStyle}>
      <Pressable
        onPress={onPress}
        className={
          `border-0.5 active:opacity-70 hover:opacity-70 p-1.5 rounded-md ${buttonStyle} ` +
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
