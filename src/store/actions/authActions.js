export const login = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const loginWithGoogle = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((resp) => {
        var token = resp.credential.accessToken;
        var user = resp.user;
        console.log(resp);
        if (resp.additionalUserInfo.isNewUser) {
          return firestore.collection("users").doc(resp.user.uid).set({
            firstName: resp.additionalUserInfo.profile.given_name,
            lastName: resp.additionalUserInfo.profile.family_name,
            email: resp.additionalUserInfo.profile.email,
            following: [],
          });
        }
      })
      .then(() => {
        dispatch({ type: "LOGIN_WITH_GOOGLE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_WITH_GOOGLE_ERROR", err });
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signup = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore.collection("users").doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          following: [],
        });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
