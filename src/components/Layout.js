import React, { useState } from "react";
import TopBar from "./TopBar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}));

export default function Layout({ title, children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
      <TopBar title={title} open={openDrawer} />
      <nav>
        <Drawer
          variant="temporary"
          open={open}
          onClose={closeDrawer}
          ModalProps={{ keepMounted: true }}
        >
          <List>
            {[
              "Goals",
              "Habits",
              "Groups",
              "Connections",
              "Accountability",
              "Well-being",
              "Profile",
              "Search",
              "Notifications"
            ].map(i => (
              <NavLink key={i} to={`/${i.toLowerCase()}`}>
                <ListItem button>
                  <ListItemText primary={i} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Drawer>
      </nav>
      <div className={classes.toolbar} />
      <section>{children}</section>
    </>
  );
}
