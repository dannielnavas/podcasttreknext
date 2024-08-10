import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

export const IconPodcast = (props) => (
  <FontAwesome name="podcast" size={24} color={props.color} {...props} />
);

export const IconList = (props) => (
  <Entypo name="list" size={24} color={props.color} {...props} />
);

export const IconNotification = (props) => (
  <AntDesign name="bells" size={24} color={props.color} {...props} />
);

export const IconPlay = (props) => (
  <FontAwesome name="play" size={32} color={props.color} {...props} />
);

export const IconPause = (props) => (
  <FontAwesome name="pause" size={24} color={props.color} {...props} />
);

export const IconNext = (props) => (
  <AntDesign name="stepforward" size={24} color={props.color} {...props} />
);

export const IconPrevious = (props) => (
  <AntDesign name="stepbackward" size={24} color={props.color} {...props} />
);
