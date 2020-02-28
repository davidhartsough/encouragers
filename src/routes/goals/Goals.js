import React from "react";
import { connect } from "react-redux";
import { fetchGoals } from "../../store/actions/goals";
import Fetcher from "../../components/Fetcher";
import ListPage from "../../components/ListPage";

function Goals(props) {
  return (
    <Fetcher {...props}>
      <ListPage type="goal" data={props.data} />
    </Fetcher>
  );
}

const mapStateToProps = ({ goals: { hasFetched, loading, data } }) => ({
  hasFetched,
  loading,
  data
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchGoals())
});

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
