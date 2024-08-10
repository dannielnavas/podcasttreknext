import { Text, View } from "react-native";
import { IconNotification } from "./Icons";

const HeaderPodcast = (props) => {
  return (
    <View className="flex flex-row justify-between items-center">
      <View className="bg-slate-900 p-2 w-40 h-9 rounded-lg justify-start items-center ">
        <Text className="text-white">{props.title}</Text>
      </View>
      <IconNotification color="#334155" />
    </View>
  );
};

export { HeaderPodcast };
