import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../store/actions/groups";
import Fetcher from "../../components/Fetcher";
import IdChecker from "../../components/IdChecker";

function Group({ group }) {
  return <h1>Group: {group.name}</h1>;
}

function Page(props) {
  return (
    <Fetcher {...props}>
      <IdChecker {...props} type="group">
        {(group) => <Group group={group} />}
      </IdChecker>
    </Fetcher>
  );
}

const mapStateToProps = ({ groups: { hasFetched, loading, data } }) => ({
  hasFetched,
  loading,
  data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchGroups()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
