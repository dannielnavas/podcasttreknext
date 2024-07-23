import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Main() {
  const inssets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-slate-700 p-4">
      <Text className="text-white">Aqui voy ahora</Text>
    </View>
  );
}
