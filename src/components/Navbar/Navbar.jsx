import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../features/filter/filterSlice";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchFilter(searchText));
  }, [dispatch, searchText]);

  return (
    <nav className="container relative py-3">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="flex-1 max-w-xs search-field group">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Task"
            className="search-input"
            id="lws-searchTask"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
