import { habits as db } from "../db";

const setLoading = (loading = true) => ({
  type: "set_loading",
  payload: { loading }
});

const getHabits = data => ({
  type: "get_habits",
  payload: { data }
});

export const fetchHabits = (hasFetched = false) => dispatch => {
  if (hasFetched) return dispatch(setLoading(false));
  dispatch(setLoading());
  return db.fetchHabits().then(data => {
    return dispatch(getHabits(data));
  });
};

const create = created => ({
  type: "create_habit",
  payload: { created }
});

export const createHabit = created => dispatch => {
  dispatch(setLoading());
  return db.createHabit(created).then(data => dispatch(create(data)));
};

const update = updated => ({
  type: "update_habit",
  payload: { updated }
});

export const updateHabit = updated => dispatch => {
  dispatch(setLoading());
  return db.updateHabit(updated).then(data => dispatch(update(data)));
};

const remove = deleted => ({
  type: "delete_habit",
  payload: { deleted }
});

export const deleteHabit = deleted => dispatch => {
  dispatch(setLoading());
  return db.deleteHabit(deleted).then(data => dispatch(remove(data)));
};
