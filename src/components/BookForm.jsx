import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBook from "../redux/books/thunk/addBook";
import updateBookThunk from "../redux/books/thunk/updateBook";

const BookForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.books);
  const { toggleForm, updateBook } = state;

  const initialBookInfo = {
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: "",
  };

  const [bookInfo, setBookInfo] = useState(initialBookInfo) || {};

  const formTitle = toggleForm ? "Update Book" : "Add New Book";
  const buttonText = toggleForm ? "Update Book" : "Add Book";

  useEffect(() => {
    setBookInfo(updateBook?.updatedBook);
  }, [setBookInfo, updateBook]);

  const handleChange = (e) => {
    let book = {};
    book[e.target.name] = e.target.value;
    setBookInfo({ ...bookInfo, ...book });
  };

  const handleFeatured = (e) => {
    let featured = e.target.checked;
    setBookInfo({ ...bookInfo, featured });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toggleForm) {
      dispatch(updateBookThunk(bookInfo));
      setBookInfo(initialBookInfo);
    } else {
      dispatch(addBook(bookInfo));
      setBookInfo(initialBookInfo);
    }
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">{formTitle}</h4>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            // onChange={handleName}
            onChange={handleChange}
            value={bookInfo?.name}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            // onChange={handleAuthor}
            onChange={handleChange}
            value={bookInfo?.author}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            onChange={handleChange}
            value={bookInfo?.thumbnail}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              onChange={handleChange}
              value={bookInfo?.price}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              onChange={handleChange}
              value={bookInfo?.rating}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            onChange={handleFeatured}
            checked={bookInfo?.featured}
          />

          <label htmlFor="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default BookForm;

/* 

  // const handleName = (e) => {
  //   let name = e.target.value;
  //   setBookInfo({ ...bookInfo, name });
  // };

  // const handleAuthor = (e) => {
  //   let author = e.target.value;
  //   setBookInfo({ ...bookInfo, author });
  // };

  // const handleImage = (e) => {
  //   let imageURL = e.target.value;
  //   setBookInfo({ ...bookInfo, imageURL });
  // };

  // const handlePrice = (e) => {
  //   let price = e.target.value;
  //   setBookInfo({ ...bookInfo, price });
  // };

  // const handleRating = (e) => {
  //   let rating = e.target.value;
  //   setBookInfo({ ...bookInfo, rating });
  // };
*/
