import { updateBook } from "../actions";

const updateBookThunk = (book) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const books = await res.json();
    dispatch(updateBook(books));
  };
};

export default updateBookThunk;
