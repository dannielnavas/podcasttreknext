import { Image, Text, View } from "react-native";

const Recommendations = ({ episode }) => {
  return (
    <View className="h-screen w-32 flex-1 flex-col items-center">
      <Image source={{ uri: episode.image }} className="h-24 w-24 rounded-full" />
      <Text className="text-lg font-semibold">{episode.name}</Text>
    </View>
  );
};

export { Recommendations };
