import React from "react";
import { connect } from "react-redux";
import { fetchGoals } from "../../../store/actions/goals";
import DetailPage from "../../../components/detail/DetailPage";

function EditGoal({ goal }) {
  return <h1>{goal.title}</h1>;
}

function Page(props) {
  return (
    <DetailPage {...props} title="Edit Goal">
      {(goal) => <EditGoal goal={goal} />}
    </DetailPage>
  );
}

const mapStateToProps = ({ goals: { loading, data } }) => ({
  loading,
  data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchGoals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
