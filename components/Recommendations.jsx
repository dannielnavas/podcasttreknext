import { Image, Pressable, Text } from "react-native";

const Recommendations = ({ episode, action }) => {
  return (
    <Pressable
      className="h-screen w-32 flex-1 flex-col items-center"
      onPress={action}
    >
      <Image source={{ uri: episode.image }} className="h-24 w-24 rounded-full" />
      <Text className="text-lg font-semibold">{episode.name}</Text>
    </Pressable>
  );
};

export { Recommendations };
