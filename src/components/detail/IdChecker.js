import React from "react";
import NotFound from "./NotFound";

export default function IdChecker({ data, id, children }) {
  const item = data.find((i) => i.id === id);
  if (item === undefined) return <NotFound />;
  return children(item);
}
