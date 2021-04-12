const initState = {};

const tweetsReducer = (state = initState, action) => {
  switch (action.type) {
    case "POST_TWEET":
      console.log("Tweet Posted", action.tweet);
      return state;

    case "POST_TWEET_ERROR":
      console.log("Tweet Posted Error", action.err);
      return state;

    default:
      return state;
  }
};

export default tweetsReducer;
