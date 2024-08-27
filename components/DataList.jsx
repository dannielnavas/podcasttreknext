import { Image, Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import { SET_CURRENT_TRACK, SET_STATE } from "../store/actions/types";

const DataList = ({ episode }) => {
  const dispatch = useDispatch();
  const { title, thumbnail } = episode;

  const setActualTrack = (song) => {
    dispatch({
      type: SET_STATE,
      payload: true,
    });
    dispatch({
      type: SET_CURRENT_TRACK,
      payload: song,
    });
  };

  return (
    <Pressable
      className="w-full h-24 bg-red-400 mr-2 rounded-lg flex flex-row items-center"
      onPress={() => setActualTrack(episode)}
    >
      <Image
        source={{ uri: thumbnail }}
        className="w-40 h-full aspect-auto object-contain rounded-lg mr-4"
      />
      <Text className="text-white truncate text-1xl w-36">{title}</Text>
    </Pressable>
  );
};

export { DataList };
