import { View } from "react-native";
import { Hero } from "../../components/Hero";
import { HeaderPodcast } from "./../../components/HeaderPodcast";
import { Main } from "./../../components/Main";

export default function Index() {
  return (
    <View className="p-4 w-screen bg-slate-50 h-screen">
      <HeaderPodcast title="Star Trek Colombia" />
      <Hero />
      <Main />
    </View>
  );
}
