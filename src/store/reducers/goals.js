const initialState = {
  loading: true,
  hasFetched: false,
  data: []
};

export default function goals(state = initialState, action) {
  switch (action.type) {
    case "set_loading": {
      const { loading } = action.payload;
      return {
        ...state,
        loading
      };
    }
    case "get_goals": {
      const { data } = action.payload;
      return {
        data,
        hasFetched: true,
        loading: false
      };
    }
    case "create_goal": {
      const { created } = action.payload;
      const data = [...state.data];
      data.push(created);
      return {
        data,
        loading: false
      };
    }
    case "update_goal": {
      const { updated } = action.payload;
      const data = [...state.data];
      const index = data.findIndex(goal => goal.id === updated.id);
      data[index] = updated;
      return {
        data,
        loading: false
      };
    }
    case "delete_goal": {
      const { deleted } = action.payload;
      const data = [...state.data];
      const index = data.findIndex(goal => goal.id === deleted.id);
      data.splice(index, 1);
      return {
        data,
        loading: false
      };
    }
    default:
      return state;
  }
}
