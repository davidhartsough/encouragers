import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../store/actions/groups";
import PageLoader from "../../components/PageLoader";
import ListPage from "../../components/ListPage";

function Groups({ groups, fetchGroups }) {
  useEffect(() => {
    if (!Boolean(window.sessionStorage.getItem("hasFetchedGroups"))) {
      fetchGroups();
    }
  }, [fetchGroups]);
  if (groups.loading) return <PageLoader />;
  return <ListPage type="group" data={groups.data} />;
}

export default connect(({ groups }) => ({ groups }), { fetchGroups })(Groups);
