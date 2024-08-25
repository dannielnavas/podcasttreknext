import { SafeAreaView, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { Episodes } from "../../components/Episodes";
import { HeaderPodcast } from "../../components/HeaderPodcast";
import { Hero } from "../../components/Hero";
import { Main } from "../../components/Main";
import { Player } from "../../components/Player";
import { Recommendations } from "../../components/Recommendations";

export default function Index() {
  const statePlayer = useSelector((state) => state.status.status);
  const episodes = [
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      name: "Episode 1",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300",
      name: "Episode 2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300",
      name: "Episode 3",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      id: 4,
      image: "https://picsum.photos/200/300",
      name: "Episode 4",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      id: 5,
      image: "https://picsum.photos/200/300",
      name: "Episode 5",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
  ];

  return (
    <SafeAreaView className="flex flex-1">
      <View className="p-4">
        <HeaderPodcast title="Star Trek Colombia" />
        <Hero />

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          className="mt-4 h-56"
        >
          {episodes
            .slice(2, 5)
            .toReversed()
            .map((episode, index) => (
              <Episodes key={episode.id} episode={episode} />
            ))}
        </ScrollView>

        <Main />

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          className="mt-4"
        >
          {episodes.slice(0, 4).map((episode, index) => (
            <Recommendations key={episode.id} episode={episode} />
          ))}
        </ScrollView>
      </View>
      {statePlayer && <Player />}
    </SafeAreaView>
  );
}
