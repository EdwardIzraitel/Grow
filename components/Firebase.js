import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "  AIzaSyDG6a5n0xFYIBw64QNp-q8qjDZjUwpzxBU",
  authDomain: "grow-firebase-84722.firebaseapp.com",
  databaseURL: "http://grow-firebase-84722.firebaseio.com",
  storageBucket: "grow-firebase-84722.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
