import { Tabs } from "expo-router";
import { IconList, IconPodcast } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
        },
        headerShown: false,
        tabBarActiveTintColor: "#f4a261",
        tabBarInactiveTintColor: "#2a9d8f",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <IconPodcast color={color} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "Lista",
          tabBarIcon: ({ color }) => <IconList color={color} />,
        }}
      />
    </Tabs>
  );
}
