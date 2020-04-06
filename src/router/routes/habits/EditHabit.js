import React from "react";
import { connect } from "react-redux";
import { fetchHabits } from "../../../store/actions/habits";
import DetailPage from "../../../components/detail/DetailPage";

function EditHabit({ habit }) {
  return <h1>{habit.name}</h1>;
}

function Page(props) {
  return (
    <DetailPage {...props} title="Habit">
      {(habit) => <EditHabit habit={habit} />}
    </DetailPage>
  );
}

const mapStateToProps = ({ habits: { loading, data } }) => ({
  loading,
  data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchHabits()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
