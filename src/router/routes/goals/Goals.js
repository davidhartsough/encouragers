import React from "react";
import { connect } from "react-redux";
import { fetchGoals } from "../../../store/actions/goals";
import ListPage from "../../../components/list/ListPage";

function Goals(props) {
  return <ListPage type="Goal" {...props} />;
}

const mapStateToProps = ({ goals: { loading, data } }) => ({
  loading,
  data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchGoals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
