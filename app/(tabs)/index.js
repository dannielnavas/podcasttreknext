import { SafeAreaView, ScrollView, View } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import { Episodes } from "../../components/Episodes";
import { HeaderPodcast } from "../../components/HeaderPodcast";
import { Hero } from "../../components/Hero";
import { Main } from "../../components/Main";

export default function Index() {
  const episodes = [
    {
      image: "https://picsum.photos/200/300",
      name: "Episode 1",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Episode 2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Episode 3",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  ];
  return (
    <View className="p-4 w-screen bg-slate-50 h-screen">
      <HeaderPodcast title="Star Trek Colombia" />
      <Hero />
      <SafeAreaView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          className="mt-4"
        >
          {episodes.map((episode, index) => (
            <Episodes key={index} episode={episode} />
          ))}
        </ScrollView>
      </SafeAreaView>
      <Main />
    </View>
  );
}
