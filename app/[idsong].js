import { Stack } from "expo-router";

export default function Detail() {
  return (
    <View className="flex-1 bg-slate-700">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "The Legend of Zelda: Breath of the Wild",
          headerRight: () => {},
        }}
      />
      <Text className="text-white">Aqui voy ahora</Text>
    </View>
  );
}
