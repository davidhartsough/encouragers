import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ({ type, items }) {
  return (
    <List>
      {items.map(({ id, title }) => (
        <Link key={id} to={`/${type}/${id}`}>
          <ListItem button>
            <ListItemText primary={title} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
