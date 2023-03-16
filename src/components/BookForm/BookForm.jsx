import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAddBookMutation,
  useEditBookMutation,
} from "../../features/api/apiSlice";

const BookForm = ({ title, bookData }) => {
  const [editBook, { isLoading }] = useEditBookMutation();
  const [addBook, { isLoading: isAdding, isSuccess: addSuccess }] =
    useAddBookMutation();
  const navigate = useNavigate();
  const initialFormData = {
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  };

  const [data, setData] = useState(
    title === "new" ? initialFormData : bookData
  );

  const handleChange = (e) => {
    const bookData = {};
    bookData[e.target.name] = e.target.value;
    setData({ ...data, ...bookData });
  };

  const handleFeatured = (e) => {
    let featured = e.target.checked;
    setData({ ...data, featured });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "new") {
      addBook(data);
    } else {
      editBook({ id: data.id, data });
    }
    navigate("/");
  };

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">
            {title === "new" ? "Add New Book" : "Edit Book"}
          </h4>
          <form onSubmit={handleSubmit} className="book-form">
            <div className="space-y-2">
              <label htmlFor="lws-bookName">Book Name</label>
              <input
                required
                className="text-input"
                type="text"
                id="lws-bookName"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-author">Author</label>
              <input
                required
                className="text-input"
                type="text"
                id="lws-author"
                name="author"
                value={data.author}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-thumbnail">Image Url</label>
              <input
                required
                className="text-input"
                type="text"
                id="lws-thumbnail"
                name="thumbnail"
                value={data.thumbnail}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="lws-price">Price</label>
                <input
                  required
                  className="text-input"
                  type="number"
                  id="lws-price"
                  name="price"
                  value={data.price}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-rating">Rating</label>
                <input
                  required
                  className="text-input"
                  type="number"
                  id="lws-rating"
                  name="rating"
                  min="1"
                  max="5"
                  value={data.rating}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="lws-featured"
                type="checkbox"
                name="featured"
                className="w-4 h-4"
                checked={data.featured}
                onClick={handleFeatured}
              />
              <label htmlFor="lws-featured" className="ml-2 text-sm">
                {" "}
                This is a featured book{" "}
              </label>
            </div>

            <button type="submit" className="submit" id="lws-submit">
              {title === "new" ? "Add Book" : "Edit Book"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default BookForm;
