import initialState from "../books/initialState";
import {
  ADDNEWBOOK,
  DELETEBOOK,
  EDITBOOK,
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

    case EDITBOOK:
      const updatedBook = state.books.find(
        (book) => book.id === action.payload
      );
      return {
        ...state,
        toggleForm: true,
        updateBook: { ...state.updateBook, updatedBook },
      };
    case UPDATEBOOK:
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return book;
          }
        }),
        toggleForm: false,
      };

    case DELETEBOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
