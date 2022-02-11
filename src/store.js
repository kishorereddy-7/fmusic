import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { songListReducers, songDetailsReducers } from "./reducers/songReducers";
import { myPlayListReducer } from "./reducers/myPlayListReducers";

const reducer = combineReducers({
  songList: songListReducers,
  songDetails: songDetailsReducers,
  myPlayList: myPlayListReducer,
});

const myPlayListItemsFromStorage = localStorage.getItem("myPlayListItems")
  ? JSON.parse(localStorage.getItem("myPlayListItems"))
  : [];

const initialState = {
  myPlayList: { myPlayListItems: myPlayListItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
