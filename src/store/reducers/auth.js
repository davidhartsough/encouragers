const initialState = {
  loading: false,
  isLoggedIn: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "request_auth":
      return {
        ...state,
        loading: true
      };
    case "receive_auth":
      const { isLoggedIn } = action.payload;
      return {
        loading: false,
        isLoggedIn
      };
    default:
      return state;
  }
}
