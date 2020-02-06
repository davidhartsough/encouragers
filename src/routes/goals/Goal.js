import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGoals } from "../../store/actions/goals";
import PageLoader from "../../components/PageLoader";
import NotFound from "../../components/NotFound";

function Goal({ goals, fetchGoals, id }) {
  useEffect(() => {
    if (!Boolean(window.sessionStorage.getItem("hasFetchedGoals"))) {
      fetchGoals();
    }
  }, [fetchGoals]);
  if (goals.loading) return <PageLoader />;
  const goal = goals.data.find(g => g.id === id);
  if (goal === undefined) return <NotFound type="goal" />;
  return <h1>Goal: {goal.name}</h1>;
}

export default connect(({ goals }) => ({ goals }), { fetchGoals })(Goal);
