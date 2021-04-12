const initState = {
  authError: null,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login Fail");
      return {
        ...state,
        authError: "Login Failed",
      };

    case "LOGIN_SUCCESS":
      console.log("Login Success");
      return {
        ...state,
        authError: null,
      };

    case "SIGNOUT_SUCCESS":
      console.log("Signout Success");
      return {
        ...state,
      };

    case "SIGNUP_SUCCESS":
      console.log("Sign up Success");
      return {
        ...state,
        authError: null,
      };

    case "SIGNUP_ERROR":
      console.log("Sign up error");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
