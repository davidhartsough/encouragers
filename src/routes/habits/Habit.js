import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchHabits } from "../../store/actions/habits";
import PageLoader from "../../components/PageLoader";
import NotFound from "../../components/NotFound";

function Habit({ habits, fetchHabits, id }) {
  useEffect(() => {
    if (!Boolean(window.sessionStorage.getItem("hasFetchedHabits"))) {
      fetchHabits();
    }
  }, [fetchHabits]);
  if (habits.loading) return <PageLoader />;
  const habit = habits.data.find(h => h.id === id);
  if (habit === undefined) return <NotFound type="habit" />;
  return <h1>Habit: {habit.name}</h1>;
}

export default connect(({ habits }) => ({ habits }), { fetchHabits })(Habit);
