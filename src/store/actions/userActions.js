export const follow = (auth, profile) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const fireStore = getFirestore();
      fireStore
        .collection("users")
        .doc(auth.uid)
        .update({ 
            following: profile.following
        })
        .then(() => {
          dispatch({ type: "FOLLOW_USER" });
        })
        .catch((err) => {
          dispatch({ type: "FOLLOW_USER_ERROR", err });
        });
    };
  };

  export const unFollow = (auth, profile) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const fireStore = getFirestore();
      fireStore
        .collection("users")
        .doc(auth.uid)
        .update({ 
            following: profile.following
        })
        .then(() => {
          dispatch({ type: "UNFOLLOW_USER" });
        })
        .catch((err) => {
          dispatch({ type: "UNFOLLOW_USER_ERROR", err });
        });
    };
  };
  