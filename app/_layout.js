import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1 bg-slate-700">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#334155",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: "Podcastrek",
          headerRight: () => null,
          headerLeft: () => null,
        }}
      />
    </View>
  );
}
