import { goals as db } from "../db";

const setLoading = (loading = true) => ({
  type: "set_loading",
  payload: { loading }
});

const getGoals = data => ({
  type: "get_goals",
  payload: { data }
});

export const fetchGoals = (hasFetched = false) => dispatch => {
  if (hasFetched) return dispatch(setLoading(false));
  dispatch(setLoading());
  return db.fetchGoals().then(data => {
    return dispatch(getGoals(data));
  });
};

const create = created => ({
  type: "create_goal",
  payload: { created }
});

export const createGoal = created => dispatch => {
  dispatch(setLoading());
  return db.createGoal(created).then(data => dispatch(create(data)));
};

const update = updated => ({
  type: "update_goal",
  payload: { updated }
});

export const updateGoal = updated => dispatch => {
  dispatch(setLoading());
  return db.updateGoal(updated).then(data => dispatch(update(data)));
};

const remove = deleted => ({
  type: "delete_goal",
  payload: { deleted }
});

export const deleteGoal = deleted => dispatch => {
  dispatch(setLoading());
  return db.deleteGoal(deleted).then(data => dispatch(remove(data)));
};
