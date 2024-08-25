import { Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SET_PLAY_OR_PAUSE } from "./../store/actions/types";
import { IconPause, IconPlay } from "./Icons";

const Player = ({ track, status }) => {
  const dispatch = useDispatch();
  const actualSong = useSelector((state) => state.tracks.currentTrack);
  if (!actualSong) return null;
  const { image, name } = actualSong;

  const playOrPause = () => {
    play ? play() : pause();
  };

  const pause = () => {
    dispatch({
      type: SET_PLAY_OR_PAUSE,
      payload: false,
    });
  };

  const play = () => {
    dispatch({
      type: SET_PLAY_OR_PAUSE,
      payload: true,
    });
  };

  return actualSong ? (
    <View className="min-w-full h-20 bg-slate-700 absolute left-0 right-0 bottom-0 z-10 flex flex-row px-2 items-center justify-between">
      <Image source={{ uri: image }} className="w-16 h-16 rounded-lg" />
      <View className="w-48 h-auto flex flex-row justify-center">
        <Text className="text-slate-50 text-lg">{name}</Text>
      </View>
      <View className="w-10 h-auto flex flex-row justify-center">
        {status ? (
          <IconPause color="#FFF" onPress={() => playOrPause()} />
        ) : (
          <IconPlay color="#FFF" />
        )}
      </View>
    </View>
  ) : (
    <></>
  );
};

export { Player };
