import initialState from "../books/initialState";
import {
  ADDNEWBOOK,
  DELETEBOOK,
  FETCHBOOK,
  SEARCHBOOK,
  UPDATEBOOK,
} from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHBOOK:
      return { ...state, books: action.payload };

    case SEARCHBOOK:
      return {
        ...state,
        searchText: action.payload,
      };
    case ADDNEWBOOK:
      return { ...state, books: [...state.books, action.payload] };

    case UPDATEBOOK:
      return {};

    case DELETEBOOK:
      return {};

    default:
      return state;
  }
};

export default reducer;
