import React from "react";
import { connect } from "react-redux";
import { fetchHabits } from "../../store/actions/habits";
import Fetcher from "../../components/Fetcher";
import IdChecker from "../../components/IdChecker";
import Layout from "../../components/Layout";

function Habit({ habit }) {
  return <h1>Habit: {habit.name}</h1>;
}

function Page(props) {
  return (
    <Layout title="Habit">
      <Fetcher {...props}>
        <IdChecker {...props} type="habit">
          {(habit) => <Habit habit={habit} />}
        </IdChecker>
      </Fetcher>
    </Layout>
  );
}

const mapStateToProps = ({ habits: { hasFetched, loading, data } }) => ({
  hasFetched,
  loading,
  data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchHabits()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
