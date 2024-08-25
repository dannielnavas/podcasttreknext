import { Image, Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import { SET_CURRENT_TRACK, SET_STATE } from "./../store/actions/types";

const Recommendations = ({ episode }) => {
  const dispatch = useDispatch();
  const { image, name } = episode;

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
      className="h-screen w-32 flex-1 flex-col items-center"
      onPress={() => setActualTrack(episode)}
    >
      <Image source={{ uri: image }} className="h-24 w-24 rounded-full" />
      <Text className="text-lg font-semibold">{name}</Text>
    </Pressable>
  );
};

export { Recommendations };
