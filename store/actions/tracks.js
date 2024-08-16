import { SET_TRACKS } from "../constants";

export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  payload: tracks,
});
