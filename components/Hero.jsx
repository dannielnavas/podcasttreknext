import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

const Hero = () => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      className="p-4 rounded-lg justify-between mt-4 h-64"
    >
      <Text className="text-lg text-white">Sign in with Facebook</Text>
    </LinearGradient>
  );
};

export { Hero };
