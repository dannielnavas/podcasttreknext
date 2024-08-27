import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { DataList } from "../../components/DataList";
import { Player } from "./../../components/Player";

export default function Shortcast() {
  const shortCast = useSelector((state) => state.playPause.tracks.shortcast);
  const statePlayer = useSelector((state) => state.status.status);

  return (
    <View className="flex-1 bg-slate-50 p-4">
      <Text className="text-2xl py-2">Shortcast</Text>
      <FlatList
        data={shortCast}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <DataList episode={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
      {statePlayer && <Player />}
    </View>
  );
}
