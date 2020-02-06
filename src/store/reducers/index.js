import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import groups from "./groups";
import goals from "./goals";
import habits from "./habits";

export default combineReducers({ auth, profile, groups, goals, habits });
