import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useParams
} from "react-router-dom";
import { Home } from "./home";
import { Groups, Group, NewGroup } from "./groups";
import { Goals, Goal, NewGoal } from "./goals";
import { Habits, Habit, NewHabit } from "./habits";

function RouteParamHandler({ children }) {
  const { id } = useParams();
  return children(id);
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/groups">
          <Groups />
        </Route>
        <Route path="/group/:id">
          <RouteParamHandler>{id => <Group id={id} />}</RouteParamHandler>
        </Route>
        <Route path="/new-group">
          <NewGroup />
        </Route>
        <Route path="/goals">
          <Goals />
        </Route>
        <Route path="/goal/:id">
          <RouteParamHandler>{id => <Goal id={id} />}</RouteParamHandler>
        </Route>
        <Route path="/new-goal">
          <NewGoal />
        </Route>
        <Route path="/habits">
          <Habits />
        </Route>
        <Route path="/habit/:id">
          <RouteParamHandler>{id => <Habit id={id} />}</RouteParamHandler>
        </Route>
        <Route path="/new-habit">
          <NewHabit />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
