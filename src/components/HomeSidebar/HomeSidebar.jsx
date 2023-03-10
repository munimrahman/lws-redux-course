import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBlog,
  sortBlog,
} from "../../features/filterBlog/filterBlogSlice.js";

const HomeSidebar = () => {
  const { filter } = useSelector((state) => state.filterBlog);
  const dispatch = useDispatch();

  const handleSort = (e) => {
    dispatch(sortBlog(e.target.value));
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            onChange={handleSort}
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                checked={filter === "all"}
                className="radio"
                onClick={() =>
                  dispatch(filterBlog(filter === "saved" ? "all" : "all"))
                }
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                checked={filter === "saved"}
                className="radio"
                onClick={() =>
                  dispatch(filterBlog(filter === "all" ? "saved" : "saved"))
                }
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default HomeSidebar;
