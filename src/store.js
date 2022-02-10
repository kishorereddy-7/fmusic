import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { songListReducers, songDetailsReducers } from "./reducers/songReducers";

const reducer = combineReducers({
  songList: songListReducers,
  songDetails: songDetailsReducers,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
