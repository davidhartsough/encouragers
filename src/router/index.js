import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";
import {
  Home,
  Groups,
  Group,
  NewGroup,
  EditGroup,
  Goals,
  Goal,
  NewGoal,
  EditGoal,
  Habits,
  Habit,
  NewHabit,
  EditHabit,
  Connections,
  MyProfile,
  Profile,
  Accountability,
  Wellbeing,
  Notifications,
  Search,
} from "./routes";

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
          <RouteParamHandler>{(id) => <Group id={id} />}</RouteParamHandler>
        </Route>
        <Route path="/new-group">
          <NewGroup />
        </Route>
        <Route path="/edit-group/:id">
          <RouteParamHandler>{(id) => <EditGroup id={id} />}</RouteParamHandler>
        </Route>
        <Route path="/goals">
          <Goals />
        </Route>
        <Route path="/goal/:id">
          <RouteParamHandler>{(id) => <Goal id={id} />}</RouteParamHandler>
        </Route>
        <Route path="/new-goal">
          <NewGoal />
        </Route>
        <Route path="/edit-goal/:id">
          <RouteParamHandler>{(id) => <EditGoal id={id} />}</RouteParamHandler>
        </Route>
        <Route path="/habits">
          <Habits />
        </Route>
        <Route path="/habit/:id">
          <RouteParamHandler>{(id) => <Habit id={id} />}</RouteParamHandler>
        </Route>
        <Route path="/new-habit">
          <NewHabit />
        </Route>
        <Route path="/edit-habit/:id">
          <RouteParamHandler>{(id) => <EditHabit id={id} />}</RouteParamHandler>
        </Route>
        <Route path="/connections">
          <Connections />
        </Route>
        <Route path="/accountability">
          <Accountability />
        </Route>
        <Route path="/well-being">
          <Wellbeing />
        </Route>
        <Route path="/profile">
          <MyProfile />
        </Route>
        <Route path="/p/:id">
          <RouteParamHandler>{(id) => <Profile id={id} />}</RouteParamHandler>
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
