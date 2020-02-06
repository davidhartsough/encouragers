import { profile as db } from "../../db";

const setLoading = (loading = true) => ({
  type: "set_loading",
  payload: { loading }
});

const getProfile = data => ({
  type: "get_profile",
  payload: { data }
});

let hasFetched = Boolean(window.sessionStorage.getItem("hasFetchedProfile"));
export const fetchProfile = () => dispatch => {
  if (hasFetched) return dispatch(setLoading(false));
  dispatch(setLoading());
  return db.fetchProfile().then(data => {
    hasFetched = true;
    window.sessionStorage.setItem("hasFetchedProfile", true);
    return dispatch(getProfile(data));
  });
};
