import {
  ADDNEWBOOK,
  DELETEBOOK,
  FETCHBOOK,
  UPDATEBOOK,
  SEARCHBOOK,
  EDITBOOK,
} from "./actionTypes";

export const fetchBook = (books) => {
  return {
    type: FETCHBOOK,
    payload: books,
  };
};

export const searchBook = (searchText) => {
  return {
    type: SEARCHBOOK,
    payload: searchText,
  };
};

export const addNewBook = (book) => {
  return {
    type: ADDNEWBOOK,
    payload: book,
  };
};

export const editBook = (id) => {
  return {
    type: EDITBOOK,
    payload: id,
  };
};

export const updateBook = (book) => {
  return {
    type: UPDATEBOOK,
    payload: book,
  };
};

export const deleteBook = (id) => {
  return {
    type: DELETEBOOK,
    payload: id,
  };
};
