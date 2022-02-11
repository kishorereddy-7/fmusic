import {
  MYPLAYLIST_ADD_ITEM,
  MYPLAYLIST_REMOVE_ITEM,
} from "../constants/myPlayListConstants";

export const myPlayListReducer = (state = { myPlayListItems: [] }, action) => {
  switch (action.type) {
    case MYPLAYLIST_ADD_ITEM:
      const item = action.payload;
      const existItem = state.myPlayListItems.find(
        (x) => x.song_id === item.song_id
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.myPlayListItems,
        };
      } else {
        return {
          ...state,
          myPlayListItems: [...state.myPlayListItems, item],
        };
      }

    case MYPLAYLIST_REMOVE_ITEM:
      return {
        ...state,
        myPlayListItems: state.myPlayListItems.filter(
          (x) => x.song_id !== action.payload
        ),
      };

    default:
      return state;
  }
};
