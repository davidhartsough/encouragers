import React from "react";
import { CircularProgress } from "@material-ui/core";

export default function Loader() {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
}
