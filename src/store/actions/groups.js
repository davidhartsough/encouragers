import { groups as db } from "../db";

const setLoading = (loading = true) => ({
  type: "set_loading",
  payload: { loading }
});

const getGroups = data => ({
  type: "get_groups",
  payload: { data }
});

export const fetchGroups = (hasFetched = false) => dispatch => {
  if (hasFetched) return dispatch(setLoading(false));
  dispatch(setLoading());
  return db.fetchGroups().then(data => {
    return dispatch(getGroups(data));
  });
};

const create = created => ({
  type: "create_group",
  payload: { created }
});

export const createGroup = created => dispatch => {
  dispatch(setLoading());
  return db.createGroup(created).then(data => dispatch(create(data)));
};

const update = updated => ({
  type: "update_group",
  payload: { updated }
});

export const updateGroup = updated => dispatch => {
  dispatch(setLoading());
  return db.updateGroup(updated).then(data => dispatch(update(data)));
};

const remove = deleted => ({
  type: "delete_group",
  payload: { deleted }
});

export const deleteGroup = deleted => dispatch => {
  dispatch(setLoading());
  return db.deleteGroup(deleted).then(data => dispatch(remove(data)));
};
