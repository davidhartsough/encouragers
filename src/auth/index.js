import React from "react";
import { connect } from "react-redux";
import { logIn } from "../store/actions/auth";
import { Button } from "@material-ui/core";
import Loader from "../components/loaders/Loader";

function Authenticator({ auth, handleClick, children }) {
  if (auth.loading) return <Loader />;
  if (auth.isLoggedIn) return children;
  return (
    <div className="login">
      <h1>Sign In</h1>
      <Button onClick={handleClick}>Log In</Button>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(logIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticator);
