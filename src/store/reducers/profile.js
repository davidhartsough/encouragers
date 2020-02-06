const initialState = {
  loading: true,
  data: {}
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "set_loading": {
      const { loading } = action.payload;
      return {
        ...state,
        loading
      };
    }
    case "get_profile": {
      const { data } = action.payload;
      return {
        loading: false,
        data
      };
    }
    default:
      return state;
  }
}
