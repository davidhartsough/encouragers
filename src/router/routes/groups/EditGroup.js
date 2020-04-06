import React from "react";
import { connect } from "react-redux";
import { fetchGroups } from "../../../store/actions/groups";
import DetailPage from "../../../components/detail/DetailPage";

function EditGroup({ group }) {
  return <h1>{group.title}</h1>;
}

function Page(props) {
  return (
    <DetailPage {...props} title="Group">
      {(group) => <EditGroup group={group} />}
    </DetailPage>
  );
}

const mapStateToProps = ({ groups: { loading, data } }) => ({
  loading,
  data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchGroups()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
