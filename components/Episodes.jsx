import { Image, Pressable, Text } from "react-native";

const Episodes = ({ episode }) => {
  return (
    <Pressable className="w-80 h-36 bg-sky-700 mr-2 rounded-lg p-1 flex-1 flex-row">
      <Image
        source={{ uri: episode.image }}
        className="w-28 h-full aspect-auto object-contain rounded-lg mr-4"
      />
      <Text className="text-white">{episode.name}</Text>
    </Pressable>
  );
};

export { Episodes };
