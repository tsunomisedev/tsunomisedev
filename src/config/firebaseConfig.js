import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfpVNclhcv2wrZSZox0rSs9iufC5bz97A",
  authDomain: "tsunomise.firebaseapp.com",
  databaseURL: "https://tsunomise.firebaseio.com",
  projectId: "tsunomise",
  storageBucket: "tsunomise.appspot.com",
  messagingSenderId: "617089135752",
  appId: "1:617089135752:web:dde5c72c02e6684341db3d",
  measurementId: "G-YZN6S7TF5X",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;
