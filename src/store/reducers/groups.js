const initialState = {
  loading: true,
  hasFetched: false,
  data: []
};

export default function groups(state = initialState, action) {
  switch (action.type) {
    case "set_loading": {
      const { loading } = action.payload;
      return {
        ...state,
        loading
      };
    }
    case "get_groups": {
      const { data } = action.payload;
      return {
        data,
        hasFetched: true,
        loading: false
      };
    }
    case "create_group": {
      const { created } = action.payload;
      const data = [...state.data];
      data.push(created);
      return {
        data,
        loading: false
      };
    }
    case "update_group": {
      const { updated } = action.payload;
      const data = [...state.data];
      const index = data.findIndex(group => group.id === updated.id);
      data[index] = updated;
      return {
        data,
        loading: false
      };
    }
    case "delete_group": {
      const { deleted } = action.payload;
      const data = [...state.data];
      const index = data.findIndex(group => group.id === deleted.id);
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
