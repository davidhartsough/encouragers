import React from "react";
import { ArrowDown, ArrowUp } from "react-feather";
import "./SortBar.css";

export default function SortBar({ sort, setSort, ascending, setAscending }) {
  function sortByType(type) {
    if (sort === type) {
      setAscending(!ascending);
    } else {
      setSort(type);
      setAscending(false);
    }
  }
  const sortByName = () => sortByType("name");
  const sortByNumber = () => sortByType("num");
  return (
    <div className="sort-bar">
      <div className="sort-item" onClick={sortByName}>
        <span className="sort-item-text">Name</span>
        {sort === "name" ? (
          ascending ? (
            <ArrowUp size={18} className="sort-item-icon" />
          ) : (
            <ArrowDown size={18} className="sort-item-icon" />
          )
        ) : null}
      </div>
      <div className="sort-item" onClick={sortByNumber}>
        {sort === "num" ? (
          ascending ? (
            <ArrowUp size={18} className="sort-item-icon" />
          ) : (
            <ArrowDown size={18} className="sort-item-icon" />
          )
        ) : null}
        <span className="sort-item-text">Number</span>
      </div>
    </div>
  );
}
