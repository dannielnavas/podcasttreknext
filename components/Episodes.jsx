import { Image, Pressable, Text } from "react-native";

const Episodes = ({ episode, action }) => {
  return (
    <Pressable className="w-96 h-48 bg-sky-700 mr-2 rounded-lg p-1" onPress={action}>
      <Image
        source={{ uri: episode.image }}
        className="w-48 h-full aspect-auto object-contain rounded-lg mr-4"
      />
      <Text className="text-white">{episode.name}</Text>
    </Pressable>
  );
};

export { Episodes };
