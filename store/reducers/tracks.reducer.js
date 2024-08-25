import {
  SET_CURRENT_TRACK,
  SET_PLAY_OR_PAUSE,
  SET_STATE,
  SET_TRACKS,
} from "./../actions/types";

export const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TRACKS:
      return {
        ...state,
        tracks: action.payload,
      };
    case SET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.payload,
      };
    case SET_PLAY_OR_PAUSE:
      return {
        ...state,
        play: action.payload,
      };
    case SET_STATE:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
