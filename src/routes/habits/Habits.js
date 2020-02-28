import React from "react";
import { connect } from "react-redux";
import { fetchHabits } from "../../store/actions/habits";
import Fetcher from "../../components/Fetcher";
import ListPage from "../../components/ListPage";

function Habits(props) {
  return (
    <Fetcher {...props}>
      <ListPage type="habit" data={props.data} />
    </Fetcher>
  );
}

const mapStateToProps = ({ habits: { hasFetched, loading, data } }) => ({
  hasFetched,
  loading,
  data
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchHabits())
});

export default connect(mapStateToProps, mapDispatchToProps)(Habits);
