import React, { useState } from "react";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard/BookCard";
import { useGetBooksQuery } from "../features/api/apiSlice";

const Home = () => {
  const { data: bookList, isLoading } = useGetBooksQuery();
  const searchText = useSelector((state) => state.filter.search);
  const [tab, setTab] = useState("all");

  const searchBooks = bookList?.filter((book) =>
    book?.name?.toLocaleLowerCase().includes(searchText?.toLocaleLowerCase())
  );
  const allBooks = searchText ? searchBooks : bookList;

  const featuredBooks = allBooks?.filter((book) => book.featured);
  const books = tab === "all" ? allBooks : featuredBooks;

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTab("all")}
              className={`lws-filter-btn ${tab === "all" && "active-filter"}`}
            >
              All
            </button>
            <button
              onClick={() => setTab("featured")}
              className={`lws-filter-btn ${
                tab === "featured" && "active-filter"
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* <!-- Card 1 --> */}
          {!isLoading &&
            books?.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
    </main>
  );
};

export default Home;
