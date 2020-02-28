import React, { useEffect } from "react";
import PageLoader from "./PageLoader";

export default function Fetcher({ hasFetched, loading, fetchData, children }) {
  useEffect(() => {
    fetchData(hasFetched);
  }, [hasFetched, fetchData]);
  if (loading) return <PageLoader />;
  return children;
}
