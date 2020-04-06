import React from "react";
import Layout from "../layout/Layout";
import Fetcher from "../Fetcher";
import IdChecker from "./IdChecker";

export default function DetailPage(props) {
  return (
    <Layout title={props.title}>
      <Fetcher {...props}>
        <IdChecker {...props}>{props.children}</IdChecker>
      </Fetcher>
    </Layout>
  );
}
