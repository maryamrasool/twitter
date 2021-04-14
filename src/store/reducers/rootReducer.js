import authReducer from "./authReducer";
import tweetsReducer from "./tweetsReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  tweet: tweetsReducer,
  user: userReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
