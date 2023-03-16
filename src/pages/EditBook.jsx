import React from "react";
import { useParams } from "react-router-dom";
import BookForm from "../components/BookForm/BookForm";
import { useGetBookQuery } from "../features/api/apiSlice";

const EditBook = () => {
  const { id } = useParams();
  const { data: book, isLoading } = useGetBookQuery(id);

  return <>{!isLoading && <BookForm title={"edit"} bookData={book} />}</>;
};

export default EditBook;
