import { Image, Text, View } from "react-native";
import { IconPlay } from "./Icons";

const Player = ({ track }) => {
  return (
    <View className="min-w-full h-20 bg-slate-700 absolute left-0 right-0 bottom-0 z-10 flex flex-row gap-2 px-2 ">
      <Image source={{ uri: track.image }} className="w-16 h-16 rounded-lg" />
      <View className="w-48 h-6 flex flex-row justify-center">
        <Text className="text-slate-50 text-lg">{track.name}</Text>
      </View>
      <View className="w-10 h-8 flex flex-row justify-center">
        <IconPlay color="#FFF" />
      </View>
    </View>
  );
};

export { Player };
