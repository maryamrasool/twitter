export const postTweet = (tweet) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    fireStore
      .collection("tweets")
      .add({
        ...tweet
      })
      .then(() => {
        dispatch({ type: "POST_TWEET", tweet });
      })
      .catch((err) => {
        dispatch({ type: "POST_TWEET_ERROR", err });
      });
  };
};
