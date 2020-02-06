import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../store/actions/groups";
import PageLoader from "../../components/PageLoader";
import NotFound from "../../components/NotFound";

function Group({ groups, fetchGroups, id }) {
  useEffect(() => {
    if (!Boolean(window.sessionStorage.getItem("hasFetchedGroups"))) {
      fetchGroups();
    }
  }, [fetchGroups]);
  if (groups.loading) return <PageLoader />;
  const group = groups.data.find(g => g.id === id);
  if (group === undefined) return <NotFound type="group" />;
  return <h1>Group: {group.name}</h1>;
}

export default connect(({ groups }) => ({ groups }), { fetchGroups })(Group);
