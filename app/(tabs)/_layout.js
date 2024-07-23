import { Tabs } from "expo-router";

export default function TabsLayout() {
  // return (
  //   <Tabs
  //     screenOptions={{
  //       tabBarStyle: {
  //         backgroundColor: "#334155",
  //       },
  //       tabBarActiveTintColor: "#fff",
  //       tabBarInactiveTintColor: "#ccc",
  //     }}
  //   >
  //     <Tabs.Screen
  //       name="index"
  //       options={{
  //         title: "Home",
  //         tabBarIcon: () => null,
  //       }}
  //     />
  //   </Tabs>
  // );
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#334155",
        },
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "Lista",
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
