import React from "react";
import { connect } from "react-redux";
import { logIn } from "../store/actions/auth";
import PageLoader from "../components/PageLoader";

function Authenticator({ auth, handleClick, children }) {
  if (auth.loading) return <PageLoader />;
  if (auth.isLoggedIn) return children;
  return (
    <div className="login">
      <h1>Sign In</h1>
      <button onClick={handleClick}>Log In</button>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(logIn())
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticator);
