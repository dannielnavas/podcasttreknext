import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { IconPause, IconPlay } from "./Icons";

const ActualSong = () => {
  const actualSong = useSelector((state) => state.tracks.currentTrack);
  const [playOrPause, setPlayOrPause] = useState(true);
  if (!actualSong) return null;
  const { thumbnail, title } = actualSong;

  const playPause = async () => {
    console.log("playPause");
  };

  return (
    <View className="flex flex-1 bg-zinc-600 justify-center items-center w-full h-full py border-lime-400 border">
      <Image
        source={{ uri: thumbnail }}
        className="border-lime-400 border w-8/12 h-3/6 ra rounded-lg"
      />
      <View className="w-52 h-auto flex flex-row justify-center">
        <Text className="text-slate-50 text-2xl h-auto w-full">{title}</Text>
      </View>
      <View className="w-10 h-auto flex flex-row justify-center">
        <Pressable onPress={playPause}>
          {playOrPause ? <IconPause color="#FFF" /> : <IconPlay color="#FFF" />}
        </Pressable>
      </View>
    </View>
  );
};

export { ActualSong };
