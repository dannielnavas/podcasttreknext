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
