import { SET_TRACKS } from "./../actions/types";

export const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TRACKS:
      return {
        ...state,
        tracks: action.payload,
      };
    default:
      return state;
  }
};
