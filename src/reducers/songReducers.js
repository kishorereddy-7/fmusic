import {
  SONG_LIST_FAIL,
  SONG_LIST_REQUEST,
  SONG_LIST_SUCCESS,
  SONG_DETAILS_FAIL,
  SONG_DETAILS_REQUEST,
  SONG_DETAILS_SUCCESS,
} from "../constants/songConstants";

export const songListReducers = (state = { songs: [] }, action) => {
  switch (action.type) {
    case SONG_LIST_REQUEST:
      return { loading: true, songs: [] };
    case SONG_LIST_SUCCESS:
      return { loading: false, songs: action.payload };
    case SONG_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const songDetailsReducers = (state = { song: [] }, action) => {
  switch (action.type) {
    case SONG_DETAILS_REQUEST:
      return { loading: true, ...state };
    case SONG_DETAILS_SUCCESS:
      return { loading: false, song: action.payload };
    case SONG_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
