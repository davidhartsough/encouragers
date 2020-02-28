import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../store/actions/groups";
import Fetcher from "../../components/Fetcher";
import ListPage from "../../components/ListPage";

function Groups(props) {
  return (
    <Fetcher {...props}>
      <ListPage type="group" data={props.data} />
    </Fetcher>
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
