import React from "react";
import { connect } from "react-redux";
import { fetchHabits } from "../../../store/actions/habits";
import ListPage from "../../../components/list/ListPage";

function Habits(props) {
  return <ListPage type="Habit" {...props} />;
}

const mapStateToProps = ({ habits: { loading, data } }) => ({
  loading,
  data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchHabits()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Habits);
