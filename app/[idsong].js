import { Stack, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { Screen } from "./../components/Screen.jsx";

export default function Detail() {
  const { idsong } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "Uss Enterprise",
          headerRight: () => {},
        }}
      />
      <Text className="text-white">id song {idsong}</Text>
    </Screen>
  );
}
