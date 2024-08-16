import { Stack } from "expo-router";
import { View } from "react-native";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "../store/reducers/rootReducer";

// const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer);

export default function Layout() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
