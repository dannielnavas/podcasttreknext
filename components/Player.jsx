import { Audio } from "expo-av"; // Add this import statement
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { IconPause, IconPlay } from "./Icons";

const Player = () => {
  const [soundActual, setSoundActual] = useState();
  const [playOrPause, setPlayOrPause] = useState(true);
  const actualSong = useSelector((state) => state.tracks.currentTrack);
  if (!actualSong) return null;
  const { thumbnail, title } = actualSong;

  useEffect(() => {
    fetchSong();
  }, [actualSong]);

  const fetchSong = async () => {
    try {
      // suena dos veces un sonido diferente
      if (soundActual) {
        await soundActual.unloadAsync();
      }

      const songUrl = "http://192.168.10.19:3000/audio/" + actualSong?.name + ".mp3";
      console.log("songUrl", songUrl);
      const { sound } = await Audio.Sound.createAsync({ uri: songUrl });
      setSoundActual(sound);
      await sound.playAsync();

      return sound;
    } catch (error) {
      console.error("Error fetching song:", error);
    }
  };

  const playPause = async () => {
    if (playOrPause) {
      await soundActual.pauseAsync();
    } else {
      await soundActual.playAsync();
    }
    setPlayOrPause(!playOrPause);
  };

  return actualSong ? (
    <View className="min-w-full h-20 bg-slate-700 absolute left-0 right-0 bottom-16 z-10 flex flex-row px-2 items-center justify-between">
      <Image source={{ uri: thumbnail }} className="w-16 h-16 rounded-lg" />
      <View className="w-52 h-auto flex flex-row justify-center">
        <Text className="text-slate-50 text-lg h-16 truncate">{title}</Text>
      </View>
      <View className="w-10 h-auto flex flex-row justify-center">
        <Pressable onPress={playPause}>
          {playOrPause ? <IconPause color="#FFF" /> : <IconPlay color="#FFF" />}
        </Pressable>
      </View>
    </View>
  ) : (
    <></>
  );
};

export { Player };
