import { addNewBook } from "../actions";

const addBook = (book) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:9000/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const books = await res.json();
    dispatch(addNewBook(books));
  };
};

export default addBook;
