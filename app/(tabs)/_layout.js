import { Tabs } from "expo-router";
import { IconList, IconPodcast } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#f4a261",
          height: 60,
        },
        headerShown: false,
        tabBarActiveTintColor: "#f4a261",
        tabBarInactiveTintColor: "#2a9d8f",
        tabBarLabelStyle: {
          fontSize: 14, // Increase the font size here
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => <IconPodcast color={color} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "Episodios",
          tabBarIcon: ({ color }) => <IconList color={color} />,
        }}
      />
      <Tabs.Screen
        name="others"
        options={{
          title: "Shortcast",
          tabBarIcon: ({ color }) => <IconPodcast color={color} />,
        }}
      />
    </Tabs>
  );
}
