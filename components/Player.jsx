import { Audio } from "expo-av"; // Add this import statement
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SET_AUDIO, SET_PLAY_OR_PAUSE_ACTUAL } from "../store/actions/types";
import { IconPause, IconPlay } from "./Icons";

const Player = () => {
  const [soundActual, setSoundActual] = useState();
  const actualSong = useSelector((state) => state.tracks.currentTrack);
  const playOrPause = useSelector((state) => state.tracks.playPause);
  if (!actualSong) return null;
  const { thumbnail, title } = actualSong;
  const dispatch = useDispatch();
  const key = "f70611f2-de77-4dd7-970e-7a32273a5e37"; // Add your key here

  useEffect(() => {
    fetchSong();
  }, [actualSong]);

  const fetchSong = async () => {
    try {
      if (soundActual) {
        await soundActual.unloadAsync();
      }
      const songUrl = `${actualSong.song}${key}`;
      const { sound } = await Audio.Sound.createAsync(
        { uri: songUrl },
        { shouldPlay: true }
      );
      setSoundActual(sound);

      //  sonar en segundo plano
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
        staysActiveInBackground: true,
      });

      await sound.playAsync();
      dispatch({
        type: SET_PLAY_OR_PAUSE_ACTUAL,
        payload: true,
      });
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
    dispatch({
      type: SET_PLAY_OR_PAUSE_ACTUAL,
      payload: !playOrPause,
    });
  };

  return actualSong ? (
    <Link
      href="/song"
      className="w-screen  bg-slate-700  absolute left-0 right-0 bottom-16 "
    >
      <View className="min-w-full w-screen h-20 flex flex-row px-2 items-center justify-between z-10 bg-slate-700">
        <Image source={{ uri: thumbnail }} className="w-16 h-16 rounded-lg" />
        <View className="w-52 h-auto flex flex-row justify-center">
          <Text className="text-slate-50 text-base h-16 w-48 truncate">{title}</Text>
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
