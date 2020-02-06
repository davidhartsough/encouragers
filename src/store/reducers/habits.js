const initialState = {
  loading: true,
  data: []
};

export default function habits(state = initialState, action) {
  switch (action.type) {
    case "set_loading": {
      const { loading } = action.payload;
      return {
        ...state,
        loading
      };
    }
    case "get_habits": {
      const { data } = action.payload;
      return {
        data,
        loading: false
      };
    }
    case "create_habit": {
      const { created } = action.payload;
      const data = [...state.data];
      data.push(created);
      return {
        data,
        loading: false
      };
    }
    case "update_habit": {
      const { updated } = action.payload;
      const data = [...state.data];
      const index = data.findIndex(habit => habit.id === updated.id);
      data[index] = updated;
      return {
        data,
        loading: false
      };
    }
    case "delete_habit": {
      const { deleted } = action.payload;
      const data = [...state.data];
      const index = data.findIndex(habit => habit.id === deleted.id);
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
