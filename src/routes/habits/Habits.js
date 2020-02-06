import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchHabits } from "../../store/actions/habits";
import PageLoader from "../../components/PageLoader";
import ListPage from "../../components/ListPage";

function Habits({ habits, fetchHabits }) {
  useEffect(() => {
    if (!Boolean(window.sessionStorage.getItem("hasFetchedHabits"))) {
      fetchHabits();
    }
  }, [fetchHabits]);
  if (habits.loading) return <PageLoader />;
  return <ListPage type="habit" data={habits.data} />;
}

export default connect(({ habits }) => ({ habits }), { fetchHabits })(Habits);
