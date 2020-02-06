import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGoals } from "../../store/actions/goals";
import PageLoader from "../../components/PageLoader";
import ListPage from "../../components/ListPage";

function Goals({ goals, fetchGoals }) {
  useEffect(() => {
    if (!Boolean(window.sessionStorage.getItem("hasFetchedGoals"))) {
      fetchGoals();
    }
  }, [fetchGoals]);
  if (goals.loading) return <PageLoader />;
  return <ListPage type="goal" data={goals.data} />;
}

export default connect(({ goals }) => ({ goals }), { fetchGoals })(Goals);
