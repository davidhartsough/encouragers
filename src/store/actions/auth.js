import { auth as db } from "../../db";

const requestAuth = () => ({ type: "request_auth" });

const receiveAuth = isLoggedIn => ({
  type: "receive_auth",
  payload: { isLoggedIn }
});

export const logIn = () => dispatch => {
  dispatch(requestAuth());
  return db.logIn().then(() => dispatch(receiveAuth(true)));
};

export const logOut = () => dispatch => {
  dispatch(requestAuth());
  return db.logOut().then(() => dispatch(receiveAuth(false)));
};
