import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../../store/actions/groups";
import ListPage from "../../../components/list/ListPage";

function Groups(props) {
  return <ListPage type="Group" {...props} />;
}

const mapStateToProps = ({ groups: { loading, data } }) => ({
  loading,
  data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchGroups()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
