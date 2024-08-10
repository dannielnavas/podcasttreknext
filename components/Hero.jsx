import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

const Hero = () => {
  return (
    <LinearGradient
      // Button Linear Gradient star trek
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      className="p-4 rounded-lg justify-between mt-4 h-64"
    >
      <Text className="text-lg text-white">Publicidad star trek</Text>
    </LinearGradient>
  );
};

export { Hero };
