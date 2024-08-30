import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { IconPause, IconPlay } from "./Icons";

const ActualSong = () => {
  const actualSong = useSelector((state) => state.tracks.currentTrack);
  const sound = useSelector((state) => state.tracks.audio);
  console.log(sound);
  const [playOrPause, setPlayOrPause] = useState(true);
  if (!actualSong) return null;
  const { thumbnail, title } = actualSong;

  const playPause = async () => {
    if (playOrPause) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setPlayOrPause(!playOrPause);
  };

  return (
    <View className="flex flex-1 bg-zinc-600 justify-center items-center w-full h-full py">
      <Image source={{ uri: thumbnail }} className="w-80 h-80 rounded-lg" />
      <View className="w-3/4 py-4 h-auto flex flex-row justify-center">
        <Text className="text-slate-50 text-2xl h-auto w-full">{title}</Text>
      </View>
      <View className="w-10 h-auto mt-11 flex flex-row justify-center">
        <Pressable onPress={playPause}>
          {playOrPause ? <IconPause color="#FFF" /> : <IconPlay color="#FFF" />}
        </Pressable>
      </View>
    </View>
  );
};

export { ActualSong };
