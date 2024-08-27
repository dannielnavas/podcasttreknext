import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Episodes } from "../../components/Episodes";
import { HeaderPodcast } from "../../components/HeaderPodcast";
import { Hero } from "../../components/Hero";
import { Main } from "../../components/Main";
import { Player } from "../../components/Player";
import { Recommendations } from "../../components/Recommendations";
import { SET_TRACKS } from "../../store/actions/types";

export default function Index() {
  const statePlayer = useSelector((state) => state.status.status);
  const [episodes, setEpisodes] = useState([]);
  const [shortCast, setShortCast] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://192.168.10.19:3000/audio/podcast-list")
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data?.episodes);
        setShortCast(data?.shortcast);
        dispatch({
          type: SET_TRACKS,
          payload: data,
        });
      });
  }, []);

  return (
    <SafeAreaView className="flex flex-1">
      <View className="p-4">
        <HeaderPodcast title="Star Trek Colombia" />
        <Hero />

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          className="mt-4 h-36"
        >
          {episodes
            .slice(2, 5)
            .reverse()
            .map((episode) => (
              <Episodes key={episode.name} episode={episode} />
            ))}
        </ScrollView>

        <Main />

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          className="mt-4"
        >
          {shortCast.slice(0, 4).map((episode) => (
            <Recommendations key={episode.name} episode={episode} />
          ))}
        </ScrollView>
      </View>
      {statePlayer && <Player />}
    </SafeAreaView>
  );
}
