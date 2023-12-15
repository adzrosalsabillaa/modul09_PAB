import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyC3G1PgTfXkrWy31zSHhLX2nHA3iHOj6Xk",
  authDomain: "noteapp-9beea.firebaseapp.com",
  databaseURL: "https://noteapp-9beea-default-rtdb.firebaseio.com/",
  projectId: "noteapp-9beea",
  storageBucket: "noteapp-9beea.appspot.com",
  messagingSenderId: "1007784137908",
  appId: "1:1007784137908:web:c039a2580e73867d7373e1"
});

const FIREBASE = firebase;

export default FIREBASE;