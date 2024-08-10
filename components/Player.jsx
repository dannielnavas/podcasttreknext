import { Text, View } from "react-native";

const Player = ({ track }) => {
  return (
    <View className="flex-1 w-screen h-20 bg-cyan-900">
      <Text>{track.name}</Text>
    </View>
  );
};

export { Player };
