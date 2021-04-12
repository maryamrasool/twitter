const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "FOLLOW_USER":
      console.log("User Followed");
      return state;

    case "FOLLOW_USER_ERROR":
      console.log("User Followed Error", action.err);
      return state;

    default:
      return state;
  }
};

export default userReducer;
