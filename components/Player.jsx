import { Image, Text, View } from "react-native";
import { IconPause, IconPlay } from "./Icons";

const Player = ({ track, play, tooglePlayer: togglePlayer }) => {
  const { image, name } = track;
  return (
    <View className="min-w-full h-20 bg-slate-700 absolute left-0 right-0 bottom-0 z-10 flex flex-row px-2 items-center justify-between">
      <Image source={{ uri: image }} className="w-16 h-16 rounded-lg" />
      <View className="w-48 h-auto flex flex-row justify-center">
        <Text className="text-slate-50 text-lg">{name}</Text>
      </View>
      <View className="w-10 h-auto flex flex-row justify-center">
        {play ? (
          <IconPause color="#FFF" onPress={togglePlayer} />
        ) : (
          <IconPlay color="#FFF" onPress={togglePlayer} />
        )}
      </View>
    </View>
  );
};

export { Player };
