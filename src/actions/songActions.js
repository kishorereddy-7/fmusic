import {
  SONG_LIST_FAIL,
  SONG_LIST_REQUEST,
  SONG_LIST_SUCCESS,
  SONG_DETAILS_FAIL,
  SONG_DETAILS_REQUEST,
  SONG_DETAILS_SUCCESS,
} from "../constants/songConstants";
import axios from "axios";

export const listSongs = () => async (dispatch) => {
  try {
    dispatch({ type: SONG_LIST_REQUEST });

    const { data } = await axios.get(
      "https://f-music-back.herokuapp.com/api/songs/"
    );

    dispatch({
      type: SONG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SONG_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listSongDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SONG_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://f-music-back.herokuapp.com/api/song/${id}`
    );

    dispatch({
      type: SONG_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SONG_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
