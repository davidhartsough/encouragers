import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Layout from "../layout/Layout";
import Fetcher from "../Fetcher";
import List from "./List";

const useStyles = makeStyles((theme) => ({
  footer: {
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "2rem",
  },
}));

export default function ListPage(props) {
  const classes = useStyles();
  const { type, data } = props;
  return (
    <Layout title={`${type}s`}>
      <Fetcher {...props}>
        {data.length > 0 ? (
          <List items={data} type={type} />
        ) : (
          <p className="empty">
            Looks like you don't have any {`${type}s`} here. Why not add one
            now?
          </p>
        )}
        <footer className={classes.footer}>
          <Link to={`/new-${type.toLowerCase()}`}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </footer>
      </Fetcher>
    </Layout>
  );
}
