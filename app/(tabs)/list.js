import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { DataList } from "../../components/DataList";

export default function List() {
  const episodes = useSelector((state) => state.playPause.tracks.episodes);
  const statePlayer = useSelector((state) => state.status.status);

  return (
    <View className="flex-1 bg-slate-50 p-4">
      <Text className="text-2xl py-2">Episodios</Text>
      <FlatList
        data={episodes}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <DataList episode={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
      {/* {statePlayer && <Player />} */}
    </View>
  );
}
