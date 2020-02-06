import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from "react-feather";
import Nav from "./Nav";
import List from "./List";
import "./ListPage.css";

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

export default function ListPage({ type, data }) {
  return (
    <>
      <Nav />
      <section>
        <header className="action-header">
          <h1>{capitalize(type)}s</h1>
          <Link to={`/new-${type}`} className="action">
            <PlusCircle />
          </Link>
        </header>
        {data.length < 1 ? (
          <p className="empty">
            Looks like you don't have any {type}s yet.
            <br />
            Go ahead and add one!
          </p>
        ) : (
          <List items={data} type={type} />
        )}
      </section>
    </>
  );
}
