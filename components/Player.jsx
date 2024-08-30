import { Audio } from "expo-av"; // Add this import statement
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SET_AUDIO } from "../store/actions/types";
import { IconPause, IconPlay } from "./Icons";

const Player = () => {
  const [soundActual, setSoundActual] = useState();
  const [playOrPause, setPlayOrPause] = useState(true);
  const actualSong = useSelector((state) => state.tracks.currentTrack);
  if (!actualSong) return null;
  const { thumbnail, title } = actualSong;
  const dispatch = useDispatch();

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
      const { sound } = await Audio.Sound.createAsync(
        { uri: songUrl },
        { shouldPlay: true }
      );
      setSoundActual(sound);

      await sound.playAsync();

      dispatch({
        type: SET_AUDIO,
        payload: sound,
      });

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
    <Link
      href="/song"
      className="w-screen  bg-slate-700  absolute left-0 right-0 bottom-16 "
    >
      <View className="min-w-full w-screen h-20 flex flex-row px-2 items-center justify-between z-10 bg-slate-700">
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
    </Link>
  ) : (
    <></>
  );
};

export { Player };
