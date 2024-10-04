import { ImageBackground, View } from "react-native";

const Hero = () => {
  return (
    <View
      // Button Linear Gradient star trek
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      className="p-2 rounded-lg mt-4 h-64 w-full"
    >
      <ImageBackground
        source={{
          uri: "https://res.cloudinary.com/dgnj7t1py/image/upload/v1728006893/w2wkmdlizoowvkolvxkr.jpg",
        }}
        resizeMode="center"
        className="w-full h-full bg-center bg-cover"
      />
    </View>
  );
};

export { Hero };
