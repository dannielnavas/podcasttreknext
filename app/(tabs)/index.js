import { FlatList, View } from "react-native";
import { Episodes } from "../../components/Episodes";
import { HeaderPodcast } from "../../components/HeaderPodcast";
import { Hero } from "../../components/Hero";
import { Main } from "../../components/Main";

export default function Index() {
  const episodes = [
    // Cambié el nombre de la variable a minúsculas para seguir las convenciones de JavaScript
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
      <FlatList
        data={episodes}
        renderItem={({ item }) => <Episodes episode={item} />} // Usa el componente correcto aquí
        keyExtractor={(item) => item.name}
        horizontal
        className="mt-4"
      />
      <Main />
    </View>
  );
}
