import { combineReducers } from "redux";
import { tracksReducer } from "./tracks.reducer";

const rootReducer = combineReducers({
  tracks: tracksReducer,
});

export { rootReducer };
