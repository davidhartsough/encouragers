import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, Bookmark, CheckSquare } from "react-feather";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <NavLink exact to="/" className="nav-link">
        <Home />
        <span className="nav-link-title">Home</span>
      </NavLink>
      <NavLink to="/groups" className="nav-link">
        <Users />
        <span className="nav-link-title">Groups</span>
      </NavLink>
      <NavLink to="/goals" className="nav-link">
        <Bookmark />
        <span className="nav-link-title">Goals</span>
      </NavLink>
      <NavLink to="/habits" className="nav-link">
        <CheckSquare />
        <span className="nav-link-title">Habits</span>
      </NavLink>
    </nav>
  );
}
