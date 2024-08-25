import { Image, Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import { SET_CURRENT_TRACK, SET_STATE } from "./../store/actions/types";

const Episodes = ({ episode }) => {
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
      className="w-96 h-24 bg-sky-700 mr-2 rounded-lg p-1 flex flex-row items-center"
      onPress={() => setActualTrack(episode)}
    >
      <Image
        source={{ uri: thumbnail }}
        className="w-48 h-full aspect-auto object-contain rounded-lg mr-4"
      />
      <Text className="text-white truncate text-1xl">{title}</Text>
    </Pressable>
  );
};

export { Episodes };
