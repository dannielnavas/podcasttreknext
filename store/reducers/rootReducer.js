import { combineReducers } from "redux";
import { tracksReducer } from "./tracks.reducer";

const rootReducer = combineReducers({
  tracks: tracksReducer,
  track: tracksReducer,
  status: tracksReducer,
  playPause: tracksReducer,
});

export { rootReducer };
