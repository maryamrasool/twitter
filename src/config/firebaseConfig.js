import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyCSpelo8mdHz4iysIROjG8jlLiuGRrxd3o",
    authDomain: "twitter-67757.firebaseapp.com",
    projectId: "twitter-67757",
    storageBucket: "twitter-67757.appspot.com",
    messagingSenderId: "883161918094",
    appId: "1:883161918094:web:058f01d0e27dbac09837df",
    measurementId: "G-9LE0GEPWPE"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});
  export default firebaseConfig;