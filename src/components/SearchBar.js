import React from "react";
import { Search } from "react-feather";
import "./SearchBar.css";

export default function SearchBar({ search, setSearch }) {
  const handleSearch = ({ target }) => setSearch(target.value);
  return (
    <div className="search-bar">
      <div className="icon-prefix">
        <Search size={20} />
      </div>
      <input
        type="search"
        placeholder="Search"
        className="search-input"
        maxLength="120"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}
