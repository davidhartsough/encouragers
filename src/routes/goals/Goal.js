import React from "react";
import { connect } from "react-redux";
import { fetchGoals } from "../../store/actions/goals";
import Fetcher from "../../components/Fetcher";
import IdChecker from "../../components/IdChecker";

function Goal({ goal }) {
  return <h1>Goal: {goal.name}</h1>;
}

function Page(props) {
  return (
    <Fetcher {...props}>
      <IdChecker {...props} type="goal">
        {goal => <Goal goal={goal} />}
      </IdChecker>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
