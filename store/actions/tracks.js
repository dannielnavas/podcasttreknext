import {
  SET_AUDIO,
  SET_CURRENT_TRACK,
  SET_PLAY_OR_PAUSE,
  SET_STATE,
  SET_TRACKS,
} from "./types";

export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  payload: tracks,
});

export const setOneTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: track,
});

export const setPlayOrPause = (play) => ({
  type: SET_PLAY_OR_PAUSE,
  payload: play,
});

export const setStatus = (status) => ({
  type: SET_STATE,
  payload: status,
});

export const setAudio = (audio) => ({
  type: SET_AUDIO,
  payload: audio,
});
