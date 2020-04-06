import React from "react";
import { connect } from "react-redux";
import { fetchHabits } from "../../store/actions/habits";
import Fetcher from "../../components/Fetcher";
import ListPage from "../../components/ListPage";
import Layout from "../../components/Layout";

function Habits(props) {
  return (
    <Layout title="Habits">
      <Fetcher {...props}>
        <ListPage type="habit" data={props.data} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Habits);
