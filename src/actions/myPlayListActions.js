import axios from "axios";
import {
  MYPLAYLIST_ADD_ITEM,
  MYPLAYLIST_REMOVE_ITEM,
} from "../constants/myPlayListConstants";

export const addToMyPlayList = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://f-music-back.herokuapp.com/api/song/${id}`
  );

  dispatch({
    type: MYPLAYLIST_ADD_ITEM,
    payload: {
      song_id: data.id,
      name: data.name,
      image: data.image,
      movieName: data.movieName,
      song: data.song,
    },
  });

  localStorage.setItem(
    "myPlayListItems",
    JSON.stringify(getState().myPlayList.myPlayListItems)
  );
};

export const removeFromMyPlayList = (id) => (dispatch, getState) => {
  dispatch({
    type: MYPLAYLIST_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem(
    "myPlayListItems",
    JSON.stringify(getState().myPlayList.myPlayListItems)
  );
};
