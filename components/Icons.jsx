import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

export const IconPodcast = ({ color }) => (
  <FontAwesome name="podcast" size={32} color={color} />
);

export const IconList = ({ color }) => (
  <Entypo name="list" size={32} color={color} />
);

export const IconNotification = ({ color }) => (
  <AntDesign name="bells" size={24} color={color} />
);

export const IconPlay = ({ color }) => (
  <FontAwesome name="play" size={32} color={color} />
);

export const IconPause = ({ color }) => (
  <FontAwesome name="pause" size={24} color={color} />
);

export const IconNext = ({ color }) => (
  <AntDesign name="stepforward" size={24} color={color} />
);

export const IconPrevious = ({ color }) => (
  <AntDesign name="stepbackward" size={24} color={color} />
);
