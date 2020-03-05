import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import { filterSortItems } from "./filter-sort";
import "./List.css";

export default function List({ items, type }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const [ascending, setAscending] = useState(false);
  const listItems = filterSortItems(items, search, sort, ascending);
  return (
    <div className="list">
      <div className="list-header">
        <SearchBar search={search} setSearch={setSearch} />
        <SortBar
          sort={sort}
          setSort={setSort}
          ascending={ascending}
          setAscending={setAscending}
        />
      </div>
      {listItems.length ? (
        listItems.map(({ id, name, active }) => (
          <Link key={id} className="item" to={`/${type}/${id}`}>
            <span>{name}</span>
            <span>{active}</span>
          </Link>
        ))
      ) : (
        <p className="no-results">No {type} found for that search.</p>
      )}
    </div>
  );
}
