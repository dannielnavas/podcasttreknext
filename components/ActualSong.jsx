import Slider from "@react-native-community/slider";
import { BlurView } from "expo-blur";
import { useEffect, useState } from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { IconPause, IconPlay } from "./Icons";

const ActualSong = () => {
  const actualSong = useSelector((state) => state.tracks.currentTrack);
  const sound = useSelector((state) => state.tracks.audio);
  const [playOrPause, setPlayOrPause] = useState(true);
  if (!actualSong) return null;
  const { thumbnail, title } = actualSong;
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    sound.setOnPlaybackStatusUpdate((status) => {
      // volumen 100%
      sound.setVolumeAsync(1);
      if (status.didJustFinish) {
        setPlayOrPause(false);
      }
      if (status.isLoaded) {
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
        setSliderValue(status.positionMillis / status.durationMillis);
      }
    });
  }, []);

  const playPause = async () => {
    if (playOrPause) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setPlayOrPause(!playOrPause);
  };

  return (
    <ImageBackground
      source={{ uri: thumbnail }} // Reemplaza con la URL de tu imagen o el path local
      className="flex flex-1 w-full h-full"
    >
      <BlurView
        intensity={100}
        tint="dark"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
      <View className="flex flex-1 justify-center items-center w-full h-full py ">
        <Image source={{ uri: thumbnail }} className="w-80 h-80 rounded-lg" />
        <View className="w-3/4 py-4 h-auto flex flex-row justify-center">
          <Text className="text-slate-50 text-2xl h-auto w-full text-center">
            {title}
          </Text>
        </View>
        <View className="w-3/4 h-auto flex flex-row justify-center">
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#fff"
            thumbTintColor="#FFFFFF"
            value={sliderValue}
            onValueChange={(value) => {
              setSliderValue(value);
              sound.setPositionAsync(value * duration);
            }}
          />
        </View>
        <View className="w-10 h-auto mt-11 flex flex-row justify-center">
          <Pressable onPress={playPause}>
            {playOrPause ? <IconPause color="#FFF" /> : <IconPlay color="#FFF" />}
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export { ActualSong };
