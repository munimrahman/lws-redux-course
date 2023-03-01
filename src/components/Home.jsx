import React, { useEffect, useState } from "react";
import BookForm from "./BookForm";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBooks";

const Home = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.books);
  const searchText = useSelector((state) => state.books.searchText);
  const searchBooks = bookList?.filter((book) =>
    book?.name?.toLocaleLowerCase().includes(searchText?.toLocaleLowerCase())
  );
  const allBooks = searchText ? searchBooks : bookList;
  const [tab, setTab] = useState("all");
  const featuredBooks = allBooks?.filter((book) => book.featured);
  const books = tab === "all" ? allBooks : featuredBooks;

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setTab("all")}
                className={`filter-btn ${tab === "all" && "active-filter"}`}
                id="lws-filterAll"
              >
                All
              </button>
              <button
                onClick={() => setTab("featured")}
                className={`filter-btn ${
                  tab === "featured" && "active-filter"
                }`}
                id="lws-filterFeatured"
              >
                Featured
              </button>
            </div>
          </div>
          <div className="lws-bookContainer">
            {/* <!-- Card 1 --> */}
            {books?.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
        <div>
          <BookForm />
        </div>
      </div>
    </main>
  );
};

export default Home;
