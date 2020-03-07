import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../store/actions/groups";
import Fetcher from "../../components/Fetcher";
import ListPage from "../../components/ListPage";
import Layout from "../../components/Layout";

function Groups(props) {
  return (
    <Layout title="My Groups">

    <Fetcher {...props}>
      <ListPage type="group" data={props.data} />
    </Fetcher>
    </Layout>
  );
}

const mapStateToProps = ({ groups: { hasFetched, loading, data } }) => ({
  hasFetched,
  loading,
  data
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchGroups())
});

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
